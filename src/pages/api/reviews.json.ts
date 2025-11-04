import type { APIRoute } from 'astro';
import localReviews from '../../data/reviews.json' assert { type: 'json' };

const PLACE_ID = import.meta.env.GOOGLE_PLACE_ID;
const API_KEY  = import.meta.env.GOOGLE_MAPS_API_KEY;

export const prerender = false;

const filter4Plus = (arr: any[] = [], min = 4) =>
  arr.filter((r) => (r?.rating ?? 0) >= min);

// create loose key for de-dupe (author + first 80 chars of text)
const makeKey = (r: any) =>
  `${(r?.author_name ?? '').trim().toLowerCase()}|${(r?.text ?? '')
    .trim()
    .toLowerCase()
    .slice(0, 80)}`;

export const GET: APIRoute = async ({ url }) => {
  const params = new URL(url).searchParams;
  const wantAll = params.get('all') === '1';
  const dedupe = params.get('dedupe') !== '0'; // default true
  const minRating = Math.max(0, Math.min(5, Number(params.get('min') ?? 4)));
  const limit = Math.min(1000, Math.max(1, Number(params.get('limit') ?? (wantAll ? 999 : 6))));
  const offset = Math.max(0, Number(params.get('offset') ?? 0));

  // Helper to shape reviews
  const normalize = (rv: any) => ({
    author_name: rv?.author_name ?? 'Anonymous',
    rating: rv?.rating ?? 0,
    time_desc: rv?.relative_time_description ?? rv?.time_desc ?? '',
    text: rv?.text ?? '',
    profile_photo_url: rv?.profile_photo_url ?? '',
  });

  const localAll = filter4Plus((localReviews as any)?.reviews ?? [], minRating).map(normalize);

  // If no server creds, serve *all* local (respect limit/offset)
  if (!PLACE_ID || !API_KEY) {
    const slice = localAll.slice(offset, offset + limit);
    return new Response(
      JSON.stringify({
        name: (localReviews as any)?.name ?? null,
        rating: (localReviews as any)?.rating ?? null,
        user_ratings_total: (localReviews as any)?.user_ratings_total ?? null,
        url: (localReviews as any)?.url ?? null,
        reviews: slice,
        _source: 'local-only',
        _count: localAll.length,
      }),
      { status: 200, headers: { 'content-type': 'application/json' } }
    );
  }

  try {
    // Google Place Details (returns ~5)
    const u = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    u.searchParams.set('place_id', PLACE_ID);
    u.searchParams.set('fields', 'name,rating,user_ratings_total,url,reviews');
    u.searchParams.set('key', API_KEY);

    const r = await fetch(u.toString());
    const json = await r.json();
    const ok = json?.status === 'OK';
    const result = ok ? json?.result ?? {} : {};
    const googleRaw = Array.isArray(result.reviews) ? result.reviews : [];
    const googleSet = filter4Plus(googleRaw, minRating).map(normalize);

    // Merge strategy
    let merged: any[] = [];
    if (wantAll) {
      if (dedupe) {
        const seen = new Set<string>();
        for (const rv of [...googleSet, ...localAll]) {
          const k = makeKey(rv);
          if (!seen.has(k)) {
            seen.add(k);
            merged.push(rv);
          }
        }
      } else {
        merged = [...googleSet, ...localAll];
      }
    } else {
      // homepage-style: just Google (or fallback to a few local)
      merged = googleSet.length ? googleSet : localAll.slice(0, limit);
    }

    // (Optional) sort: most recent-ish first (we only have relative text; fallback to rating)
    merged = merged.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    const total = merged.length;
    const slice = merged.slice(offset, offset + limit);

    const payload = {
      name: result?.name ?? (localReviews as any)?.name ?? null,
      rating: result?.rating ?? (localReviews as any)?.rating ?? null,
      user_ratings_total:
        result?.user_ratings_total ?? (localReviews as any)?.user_ratings_total ?? null,
      url: result?.url ?? (localReviews as any)?.url ?? null,
      reviews: slice,
      _source: wantAll ? (ok ? 'google+local' : 'local-fallback') : ok ? 'google' : 'local-fallback',
      _count: total,
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': wantAll
          ? 's-maxage=600, stale-while-revalidate=86400'
          : 's-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    const slice = localAll.slice(offset, offset + limit);
    return new Response(
      JSON.stringify({
        name: (localReviews as any)?.name ?? null,
        rating: (localReviews as any)?.rating ?? null,
        user_ratings_total: (localReviews as any)?.user_ratings_total ?? null,
        url: (localReviews as any)?.url ?? null,
        reviews: slice,
        _source: 'fallback-runtime-local',
        _count: localAll.length,
      }),
      { status: 200, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } }
    );
  }
};
