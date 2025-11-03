export { renderers } from '../../renderers.mjs';

const name = "DaVinci Radiance";
const rating = 5;
const user_ratings_total = 42;
const url = "";
const reviews = [{"author_name":"Happy Client","rating":5,"time_desc":"2 weeks ago","text":"Fast and painless. My teeth are noticeably whiter!","profile_photo_url":""}];
const localReviews = {
  name,
  rating,
  user_ratings_total,
  url,
  reviews,
};

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const prerender = false;
function filter4Plus(reviews = []) {
  return reviews.filter((r) => (r?.rating ?? 0) >= 4);
}
const GET = async () => {
  try {
    if (!PLACE_ID || !API_KEY) {
      const payload2 = {
        ...localReviews,
        reviews: filter4Plus(localReviews?.reviews)
      };
      return new Response(JSON.stringify(payload2), {
        status: 200,
        headers: { "content-type": "application/json" }
      });
    }
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", PLACE_ID);
    url.searchParams.set("fields", "name,rating,user_ratings_total,url,reviews");
    url.searchParams.set("key", API_KEY);
    const r = await fetch(url.toString());
    const json = await r.json();
    if (json?.status && json.status !== "OK") {
      const payload2 = {
        ...localReviews,
        reviews: filter4Plus(localReviews?.reviews),
        // Optional: include a flag so you know it fell back
        _source: "fallback",
        _google_status: json.status
      };
      return new Response(JSON.stringify(payload2), {
        status: 200,
        headers: { "content-type": "application/json", "cache-control": "no-store" }
      });
    }
    const result = json?.result ?? {};
    const raw = Array.isArray(result.reviews) ? result.reviews : [];
    const reviews = filter4Plus(raw).map((rv) => ({
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
      reviews,
      _source: "google"
    };
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "s-maxage=3600, stale-while-revalidate=86400"
      }
    });
  } catch (err) {
    const payload = {
      ...localReviews,
      reviews: filter4Plus(localReviews?.reviews),
      _source: "fallback",
      _error: "runtime"
    };
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store" }
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
