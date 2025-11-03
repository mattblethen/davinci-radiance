export { renderers } from '../../renderers.mjs';

const PLACE_ID = "ChIJzetElruFbIcRyyB-vmmkyw8";
const API_KEY = "AIzaSyDT6Lrykb8MpQ7khzT1sxVov_Kmm7dwONk";
const prerender = false;
function readLocalReviews() {
  try {
    const files = /* #__PURE__ */ Object.assign({



});
    const key = Object.keys(files)[0];
    if (!key) return null;
    const raw = files[key];
    const parsed = JSON.parse(raw);
    parsed.reviews = (parsed.reviews ?? []).filter((r) => (r?.rating ?? 0) >= 4);
    return parsed;
  } catch {
    return null;
  }
}
const GET = async () => {
  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", PLACE_ID);
    url.searchParams.set("fields", "name,rating,user_ratings_total,url,reviews");
    url.searchParams.set("key", API_KEY);
    const r = await fetch(url.toString());
    const json = await r.json();
    const result = json?.result ?? {};
    const raw = Array.isArray(result.reviews) ? result.reviews : [];
    const reviews = raw.filter((rv) => (rv?.rating ?? 0) >= 4).map((rv) => ({
      author_name: rv?.author_name ?? "Anonymous",
      rating: rv?.rating ?? 0,
      time_desc: rv?.relative_time_description ?? "",
      text: rv?.text ?? "",
      profile_photo_url: rv?.profile_photo_url ?? ""
    }));
    const payload = {
      name: result?.name ?? null,
      rating: result?.rating ?? null,
      user_ratings_total: result?.user_ratings_total ?? null,
      url: result?.url ?? null,
      reviews
    };
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "s-maxage=3600, stale-while-revalidate=86400"
      }
    });
  } catch {
    const local = readLocalReviews();
    return new Response(JSON.stringify(local ?? { name: null, reviews: [] }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
