import type { APIRoute } from "astro";

// Use runtime env so new keys take effect without a rebuild-inlining surprise
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY  = process.env.GOOGLE_MAPS_API_KEY;

export const prerender = false;

// Normalize v1 review shape -> UI shape
function normalizeV1(rv: any) {
  const textObj = rv?.text;
  return {
    author_name: rv?.authorAttribution?.displayName ?? "Anonymous",
    author_url: rv?.authorAttribution?.uri ?? "",
    profile_photo_url: rv?.authorAttribution?.photoUri ?? "",
    rating: Number(rv?.rating ?? 0),
    time_desc: rv?.relativePublishTimeDescription || rv?.publishTime || "",
    text: typeof textObj === "string" ? textObj : textObj?.text ?? "",
  };
}

// Legacy fallback (the ~5 reviews) if v1 isn’t available
async function fetchLegacyFive(): Promise<{reviews:any[]; _count:number; _source:string}> {
  if (!PLACE_ID || !API_KEY) return { reviews: [], _count: 0, _source: "legacy-missing-env" };
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", PLACE_ID);
  url.searchParams.set("fields", "name,rating,user_ratings_total,url,reviews");
  url.searchParams.set("key", API_KEY);

  const r = await fetch(url.toString());
  if (!r.ok) return { reviews: [], _count: 0, _source: "legacy-http-error" };
  const json = await r.json();
  const arr = Array.isArray(json?.result?.reviews) ? json.result.reviews : [];
  const reviews = arr
    .map((rv: any) => ({
      author_name: rv?.author_name ?? "Anonymous",
      rating: Number(rv?.rating ?? 0),
      time_desc: rv?.relative_time_description ?? "",
      text: rv?.text ?? "",
      profile_photo_url: rv?.profile_photo_url ?? "",
    }))
    .filter((r: any) => r.rating >= 4);
  return { reviews, _count: reviews.length, _source: "legacy" };
}

export const GET: APIRoute = async () => {
  if (!PLACE_ID || !API_KEY) {
    return new Response(JSON.stringify({ reviews: [], _count: 0, _source: "missing-env" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  const all: any[] = [];
  let pageToken: string | undefined;

  try {
    // Up to ~200 items (10 * 20), but we request 50/page and stop when token ends.
    for (let i = 0; i < 10; i++) {
      const base = `https://places.googleapis.com/v1/places/${PLACE_ID}/reviews`;
      // Try pageSize first
      const tryOnce = async (paramName: "pageSize" | "maxPageSize") => {
        const u = new URL(base);
        if (pageToken) u.searchParams.set("pageToken", pageToken);
        // Ask generously
        u.searchParams.set(paramName, "50");

        const r = await fetch(u.toString(), {
          method: "GET",
          headers: {
            "X-Goog-Api-Key": API_KEY,
            // Field mask MUST include nextPageToken and the nested review fields we use
            "X-Goog-FieldMask":
              "reviews.rating,reviews.text,reviews.publishTime," +
              "reviews.relativePublishTimeDescription,reviews.authorAttribution.displayName," +
              "reviews.authorAttribution.uri,reviews.authorAttribution.photoUri,nextPageToken",
          },
        });

        if (!r.ok) {
          return { ok: false, data: null as any, debug: await r.text().catch(() => "") };
        }
        const data = await r.json();
        return { ok: true, data, debug: "" };
      };

      // Try with pageSize, then with maxPageSize if needed
      let resp = await tryOnce("pageSize");
      if (!resp.ok) resp = await tryOnce("maxPageSize");
      if (!resp.ok) {
        // v1 failed → graceful legacy fallback
        const legacy = await fetchLegacyFive();
        return new Response(JSON.stringify({ ...legacy, _v1_error: resp.debug }), {
          status: 200,
          headers: { "content-type": "application/json", "cache-control": "no-store" },
        });
      }

      const json = resp.data;
      const arr = Array.isArray(json?.reviews) ? json.reviews : [];
      for (const rv of arr) {
        const norm = normalizeV1(rv);
        if (norm.rating >= 4) all.push(norm);
      }

      pageToken = json?.nextPageToken;
      if (!pageToken) break;
      // token needs a brief delay before it becomes valid
      await new Promise((res) => setTimeout(res, 1500));
    }

    // Sort by recency-ish if needed
    all.sort((a, b) => String(b.time_desc).localeCompare(String(a.time_desc)));

    return new Response(JSON.stringify({ reviews: all, _count: all.length, _source: "v1" }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "s-maxage=1800, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    // Runtime error → legacy fallback
    const legacy = await fetchLegacyFive();
    return new Response(JSON.stringify({ ...legacy, _v1_runtime_error: String(err) }), {
      status: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  }
};
