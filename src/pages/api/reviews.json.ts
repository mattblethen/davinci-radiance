import type { APIRoute } from 'astro';

const PLACE_ID = import.meta.env.GOOGLE_PLACE_ID;
const API_KEY  = import.meta.env.GOOGLE_MAPS_API_KEY;

export const prerender = false;

export const GET: APIRoute = async () => {
  // If env vars are missing, serve from local JSON (4★+ only)
  if (!PLACE_ID || !API_KEY) {
    try {
      const localMod = await import('../../data/reviews.json'); // ✅ correct path
      const local = (localMod as any).default ?? localMod;
      const reviews = (local.reviews ?? []).filter((r: any) => (r?.rating ?? 0) >= 4);
      return new Response(
        JSON.stringify({ ...local, reviews }),
        { status: 200, headers: { 'content-type': 'application/json' } }
      );
    } catch {
      return new Response(JSON.stringify({ name: null, reviews: [] }), {
        status: 200,
        headers: { 'content-type': 'application/json' }
      });
    }
  }

  // Live fetch via Google Places (4★+ only)
  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', PLACE_ID);
    url.searchParams.set('fields', 'name,rating,user_ratings_total,url,reviews');
    url.searchParams.set('key', API_KEY);

    const r = await fetch(url.toString());
    const json = await r.json();
    const result = json?.result ?? {};
    const raw = Array.isArray(result.reviews) ? result.reviews : [];

    const reviews = raw
      .filter((rv: any) => (rv?.rating ?? 0) >= 4)
      .map((rv: any) => ({
        author_name: rv?.author_name ?? 'Anonymous',
        rating: rv?.rating ?? 0,
        time_desc: rv?.relative_time_description ?? '',
        text: rv?.text ?? '',
        profile_photo_url: rv?.profile_photo_url ?? '',
      }));

    const payload = {
      name: result?.name ?? null,
      rating: result?.rating ?? null,
      user_ratings_total: result?.user_ratings_total ?? null,
      url: result?.url ?? null,
      reviews,
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 's-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return new Response(JSON.stringify({ name: null, reviews: [] }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }
};
