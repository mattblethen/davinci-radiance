import type { APIRoute } from 'astro';
// Static import so Vite bundles the fallback at build time (no path issues)
import localReviews from '../../data/reviews.json' assert { type: 'json' };

const PLACE_ID = import.meta.env.GOOGLE_PLACE_ID;
const API_KEY  = import.meta.env.GOOGLE_MAPS_API_KEY;

export const prerender = false;

function filter4Plus(reviews: any[] = []) {
  return reviews.filter((r) => (r?.rating ?? 0) >= 4);
}

export const GET: APIRoute = async () => {
  try {
    // If envs missing, serve local JSON (4★+ only)
    if (!PLACE_ID || !API_KEY) {
      const payload = {
        ...localReviews,
        reviews: filter4Plus((localReviews as any)?.reviews),
      };
      return new Response(JSON.stringify(payload), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    }

    // Live fetch via Google Places
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', PLACE_ID);
    url.searchParams.set('fields', 'name,rating,user_ratings_total,url,reviews');
    url.searchParams.set('key', API_KEY);

    const r = await fetch(url.toString());
    const json = await r.json();

    // If Google rejects or payload is odd, fall back to local (don’t crash function)
    if (json?.status && json.status !== 'OK') {
      const payload = {
        ...localReviews,
        reviews: filter4Plus((localReviews as any)?.reviews),
        // Optional: include a flag so you know it fell back
        _source: 'fallback',
        _google_status: json.status,
      };
      return new Response(JSON.stringify(payload), {
        status: 200,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
      });
    }

    const result = json?.result ?? {};
    const raw = Array.isArray(result.reviews) ? result.reviews : [];

    const reviews = filter4Plus(raw).map((rv: any) => ({
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
      _source: 'google',
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 's-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    // Never crash — always respond
    const payload = {
      ...localReviews,
      reviews: filter4Plus((localReviews as any)?.reviews),
      _source: 'fallback',
      _error: 'runtime',
    };
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });
  }
};