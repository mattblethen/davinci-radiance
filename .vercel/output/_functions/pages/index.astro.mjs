import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as createAstro, d as renderComponent, e as renderSlot, f as renderHead, F as Fragment } from '../chunks/astro/server_CKvN60hB.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_2eNjLm-2.mjs';
export { renderers } from '../renderers.mjs';

const SITE = {
  name: "DaVinci Radiance",
  url: "https://davinciradiance.com",
  phoneHuman: "(303) 662-8422",
  phone: "+13036628422",
  // tel: format (numbers only, leading +1 if US)
  sms: "+13036628422",
  // sms: link target
  email: "hello@davinciradiance.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Process", href: "/process" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" }
  ],
  locations: [
    {
      label: "Lone Tree",
      street: "8401 Park Meadows Center Dr, Level 1 (Near Dillard’s)",
      city: "Lone Tree",
      region: "CO",
      postal: "80124",
      phoneHuman: "(303) 662-8422",
      phone: "+13036628422"
    },
    {
      label: "Colorado Springs",
      street: "13570 Meadowgrass Dr, Suite No. 13 (Jenessé Salon & Spa Suites)",
      city: "Colorado Springs",
      region: "CO",
      postal: "80921",
      phoneHuman: "(719) 684-5551",
      phone: "+17196845551"
    }
  ],
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/"
  }
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const { nav } = SITE;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm"> <!-- Top contact bar (desktop) --> <div class="hidden md:flex items-center justify-between px-4 lg:px-8 py-2 text-sm"> <p class="text-slate-600">
Now serving <span class="font-medium">Lone Tree</span> & <span class="font-medium">Colorado Springs</span> </p> <div class="flex items-center gap-3"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1.5 font-medium text-white hover:bg-emerald-700 transition"${addAttribute(`Call ${SITE.phoneHuman}`, "aria-label")}> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5.5A2.5 2.5 0 0 1 4.5 3H6a1 1 0 0 1 1 .9 15.9 15.9 0 0 0 1.2 4.2 1 1 0 0 1-.23 1.1l-1.3 1.3a14.5 14.5 0 0 0 6.7 6.7l1.3-1.3a1 1 0 0 1 1.1-.23 15.9 15.9 0 0 0 4.2 1.2 1 1 0 0 1 .9 1v1.5A2.5 2.5 0 0 1 18.5 22h-1A15.5 15.5 0 0 1 2 6.5v-1z"></path></svg> <span>Call ${SITE.phoneHuman}</span> </a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="inline-flex items-center gap-2 rounded-full border border-emerald-600 text-emerald-700 px-3 py-1.5 font-medium hover:bg-emerald-50 transition" aria-label="Text us to schedule"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v9z"></path></svg> <span>Text Us</span> </a> </div> </div> <!-- Main nav --> <div class="px-4 lg:px-8 py-3"> <div class="mx-auto flex max-w-7xl items-center justify-between"> <!-- Brand --> <a href="/" class="flex items-center gap-3"> <div class="text-xl font-bold tracking-tight text-slate-900">${SITE.name}</div> </a> <!-- Desktop nav --> <nav class="hidden md:flex items-center gap-6 text-[15px] text-slate-700"> ${nav.map((item) => renderTemplate`<a class="hover:text-slate-900"${addAttribute(item.href, "href")}>${item.label}</a>`)} </nav> <!-- Desktop CTAs --> <!-- Mobile menu group (checkbox + button + panel) --> <div class="md:hidden relative"> <input id="nav-toggle" type="checkbox" class="peer sr-only"> <label for="nav-toggle" class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700"> <span class="sr-only">Open menu</span> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> <!-- Dropdown panel --> <div class="absolute right-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl
                 hidden peer-checked:block"> <nav class="grid gap-1 text-slate-700"> ${nav.map((item) => renderTemplate`<a class="rounded-md px-3 py-2 hover:bg-slate-50"${addAttribute(item.href, "href")}>${item.label}</a>`)} </nav> <div class="mt-3 grid grid-cols-2 gap-2"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="rounded-lg bg-emerald-600 px-3 py-2 text-center font-semibold text-white hover:bg-emerald-700">Call</a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="rounded-lg border border-emerald-600 px-3 py-2 text-center font-semibold text-emerald-700 hover:bg-emerald-50">Text</a> </div> </div> </div> </div> </div> </header> <!-- ✅ Mobile sticky bottom CTA bar --> <div class="md:hidden fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]" style="padding-bottom: env(safe-area-inset-bottom);"> <div class="mx-auto max-w-7xl px-4 lg:px-8 py-2"> <div class="grid grid-cols-2 gap-2"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="rounded-lg bg-emerald-600 px-3 py-3 text-center font-semibold text-white hover:bg-emerald-700">Call</a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="rounded-lg border border-emerald-600 px-3 py-3 text-center font-semibold text-emerald-700 hover:bg-emerald-50">Text</a> </div> </div> </div>`;
}, "C:/Users/Shadow/davinci-radiance/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 bg-slate-900 text-slate-200 pb-24 md:pb-0"> <div class="mx-auto max-w-7xl px-4 lg:px-8 py-12"> <div class="grid gap-10 md:grid-cols-3"> <!-- Brand & Mission --> <div> <div class="text-lg font-semibold">${SITE.name}</div> <p class="mt-3 text-sm text-slate-400">
Plant & mineral-based teeth whitening. Safe, fast, and confidence-boosting results.
</p> <div class="mt-4 flex items-center gap-3"> <!-- socials (replace hrefs in site config) --> <a${addAttribute(SITE.social.facebook, "href")} aria-label="Facebook" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.2 2.1 15.3 2 14.2 2c-3 0-5.1 1.8-5.1 5.2V10H6v4h3v8h4z"></path></svg> </a> <a${addAttribute(SITE.social.instagram, "href")} aria-label="Instagram" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"></path></svg> </a> </div> </div> <!-- Locations --> <div class="space-y-6"> <div class="text-sm font-semibold uppercase tracking-wide text-slate-400">Locations</div> ${SITE.locations.map((loc) => renderTemplate`<div class="rounded-lg border border-slate-800 p-4"> <div class="font-medium text-white">${loc.label}</div> <div class="mt-1 text-sm text-slate-400">${loc.street}</div> <div class="text-sm text-slate-400">${loc.city}, ${loc.region} ${loc.postal}</div> <a${addAttribute(`tel:${loc.phone}`, "href")} class="mt-2 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5.5A2.5 2.5 0 0 1 4.5 3H6a1 1 0 0 1 1 .9 15.9 15.9 0 0 0 1.2 4.2 1 1 0 0 1-.23 1.1l-1.3 1.3a14.5 14.5 0 0 0 6.7 6.7l1.3-1.3a1 1 0 0 1 1.1-.23 15.9 15.9 0 0 0 4.2 1.2 1 1 0 0 1 .9 1v1.5A2.5 2.5 0 0 1 18.5 22h-1A15.5 15.5 0 0 1 2 6.5v-1z"></path></svg> <span>${loc.phoneHuman}</span> </a> </div>`)} </div> <!-- Quick actions --> <div> <div class="text-sm font-semibold uppercase tracking-wide text-slate-400">Schedule</div> <div class="mt-4 grid grid-cols-2 gap-3 max-w-sm"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="rounded-lg bg-emerald-600 px-4 py-2 text-center font-semibold text-white hover:bg-emerald-700">Call</a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="rounded-lg border border-emerald-500 px-4 py-2 text-center font-semibold text-emerald-300 hover:bg-slate-800">Text</a> </div> <div class="mt-4 text-sm text-slate-400"> <div>Mon–Sat • By Appointment</div> <div><a${addAttribute(`mailto:${SITE.email}`, "href")} class="hover:text-slate-300">${SITE.email}</a></div> </div> </div> </div> <div class="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500"> <p>
Teeth have a natural stopping point; individual results vary. Whitening does not change or damage tooth structure and
        results may be less effective on damaged enamel or intrinsic discoloration. If you’re not pleased with your results,
        please contact us within 24 hours.
</p> <p class="mt-3">&copy; ${year} ${SITE.name}. All rights reserved.</p> </div> </div> </footer>`;
}, "C:/Users/Shadow/davinci-radiance/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro$1 = createAstro("https://davinci-radiance.vercel.app");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "DaVinci Radiance \u2014 Teeth Whitening in Colorado",
    description = "Plant & mineral-based teeth whitening. Safe, fast, low-sensitivity results in Lone Tree and Colorado Springs.",
    noindex = false,
    ogImage = "/og-default.jpg",
    twitter = { card: "summary_large_image", creator: "@yourhandle" },
    schema = []
  } = Astro2.props;
  const url = new URL(Astro2.url.pathname, SITE.url).toString();
  const schemas = Array.isArray(schema) ? schema : [schema].filter(Boolean);
  const themeColor = "#0A2342";
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="theme-color"', ">", '<!-- Canonical & basic SEO --><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:card"', ">", '<meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicons (drop these files in /public) --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Preconnects (safe defaults) --><link rel="preconnect"', ' crossorigin><!-- JSON-LD Organization & Website (base). Pages can pass more via `schema` prop --><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": SITE.name,\n        "url": SITE.url,\n        "logo": new URL("/favicon.svg", SITE.url).toString(),\n        "sameAs": Object.values(SITE.social).filter(Boolean),\n        "contactPoint": [{\n          "@type": "ContactPoint",\n          "telephone": SITE.phone,\n          "contactType": "customer service",\n          "areaServed": "US",\n          "availableLanguage": ["en"]\n        }]\n      })}\n    <\/script><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "WebSite",\n        "url": SITE.url,\n        "name": SITE.name,\n        "potentialAction": {\n          "@type": "SearchAction",\n          "target": `${SITE.url}/search?q={search_term_string}`,\n          "query-input": "required name=search_term_string"\n        }\n      })}\n    <\/script>', '<!-- Partytown: any third-party scripts should use type="text/partytown" on pages -->', '</head> <body class="min-h-dvh bg-white text-slate-800 antialiased"> <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-emerald-600 px-3 py-1.5 text-white">\nSkip to content\n</a> ', ' <main id="main" class="mx-auto max-w-7xl px-4 lg:px-8"> ', " </main> ", " </body></html>"], ['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="theme-color"', ">", '<!-- Canonical & basic SEO --><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:card"', ">", '<meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicons (drop these files in /public) --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Preconnects (safe defaults) --><link rel="preconnect"', ' crossorigin><!-- JSON-LD Organization & Website (base). Pages can pass more via \\`schema\\` prop --><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": SITE.name,\n        "url": SITE.url,\n        "logo": new URL("/favicon.svg", SITE.url).toString(),\n        "sameAs": Object.values(SITE.social).filter(Boolean),\n        "contactPoint": [{\n          "@type": "ContactPoint",\n          "telephone": SITE.phone,\n          "contactType": "customer service",\n          "areaServed": "US",\n          "availableLanguage": ["en"]\n        }]\n      })}\n    <\/script><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "WebSite",\n        "url": SITE.url,\n        "name": SITE.name,\n        "potentialAction": {\n          "@type": "SearchAction",\n          "target": \\`\\${SITE.url}/search?q={search_term_string}\\`,\n          "query-input": "required name=search_term_string"\n        }\n      })}\n    <\/script>', '<!-- Partytown: any third-party scripts should use type="text/partytown" on pages -->', '</head> <body class="min-h-dvh bg-white text-slate-800 antialiased"> <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-emerald-600 px-3 py-1.5 text-white">\nSkip to content\n</a> ', ' <main id="main" class="mx-auto max-w-7xl px-4 lg:px-8"> ', " </main> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(themeColor, "content"), noindex && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta name="robots" content="noindex, nofollow"><meta name="googlebot" content="noindex, nofollow">` })}`, addAttribute(url, "href"), addAttribute(SITE.name, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(ogImage.startsWith("http") ? ogImage : new URL(ogImage, SITE.url).toString(), "content"), addAttribute(twitter.card ?? "summary_large_image", "content"), twitter.creator && renderTemplate`<meta name="twitter:creator"${addAttribute(twitter.creator, "content")}>`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage.startsWith("http") ? ogImage : new URL(ogImage, SITE.url).toString(), "content"), addAttribute(new URL(SITE.url).origin, "href"), schemas.map((obj) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">{JSON.stringify(obj)}<\/script>'])))), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Shadow/davinci-radiance/src/layouts/Base.astro", void 0);

const heroImg = new Proxy({"src":"/_astro/hero.C0kSr2T5.avif","width":1279,"height":717,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Shadow/davinci-radiance/src/assets/images/hero.avif";
							}
							
							return target[name];
						}
					});

const processImg = new Proxy({"src":"/_astro/IMG_6743.CHuOYJAf.JPG","width":1280,"height":854,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Shadow/davinci-radiance/src/assets/images/IMG_6743.JPG";
							}
							
							return target[name];
						}
					});

const baTitle = new Proxy({"src":"/_astro/Screen Shot 2020-01-31 at 5.18.58 PM.DN-Gkbp0.png","width":1232,"height":1284,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Shadow/davinci-radiance/src/assets/images/Screen Shot 2020-01-31 at 5.18.58 PM.png";
							}
							
							return target[name];
						}
					});

const smilesImg = new Proxy({"src":"/_astro/Davinci Corporate image.DCo_3st8.jpeg","width":863,"height":857,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Shadow/davinci-radiance/src/assets/images/Davinci Corporate image.jpeg";
							}
							
							return target[name];
						}
					});

const session1 = new Proxy({"src":"/_astro/InSession.DNiD93vm.jpeg","width":7952,"height":5304,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Shadow/davinci-radiance/src/assets/images/InSession.jpeg";
							}
							
							return target[name];
						}
					});

const session2 = new Proxy({"src":"/_astro/InSession2.CuM953vZ.jpeg","width":6240,"height":4160,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Shadow/davinci-radiance/src/assets/images/InSession2.jpeg";
							}
							
							return target[name];
						}
					});

const logoDark = new Proxy({"src":"/_astro/logo.D3Ly3pNj.png","width":4245,"height":3323,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Shadow/davinci-radiance/src/assets/images/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://davinci-radiance.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const schemaLocal = SITE.locations.map((loc) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE.name} \u2014 ${loc.label}`,
    image: new URL("/favicon.svg", SITE.url).toString(),
    url: SITE.url,
    telephone: loc.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.region,
      postalCode: loc.postal,
      addressCountry: "US"
    },
    areaServed: "Colorado, USA",
    sameAs: Object.values(SITE.social).filter(Boolean)
  }));
  const PAGE = {
    title: "DaVinci Radiance \u2014 Professional Teeth Whitening in Lone Tree & Colorado Springs",
    description: "Plant & mineral-based teeth whitening. Safe, fast, and low-sensitivity results. Call or text today to schedule your session."
  };
  let reviews = [];
  let placeMeta = {};
  try {
    const apiUrl = new URL("/api/reviews.json", Astro2.url).toString();
    const r = await fetch(apiUrl);
    const data = await r.json();
    reviews = (data?.reviews ?? []).slice(0, 6);
    placeMeta = { rating: data?.rating, user_ratings_total: data?.user_ratings_total };
  } catch (_) {
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": PAGE.title, "description": PAGE.description, "schema": schemaLocal }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative mx-auto max-w-7xl pt-10 md:pt-14"> <div class="grid items-center gap-8 md:grid-cols-2"> <div> <h1 class="text-3xl/tight font-semibold text-slate-900 sm:text-4xl md:text-5xl">
Your Best Smile Starts Here.
</h1> <p class="mt-4 max-w-prose text-slate-600">
Professional teeth whitening using FDA-approved plant & mineral based gels. Safe, fast, and low sensitivity.
</p> <div class="mt-6 flex flex-wrap gap-3"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">
Call ${SITE.phoneHuman} </a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
Text Us to Schedule
</a> </div> <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600"> <div class="inline-flex items-center gap-2"><span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> FDA Approved</div> <div class="inline-flex items-center gap-2"><span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Plant & Mineral Based</div> <div class="inline-flex items-center gap-2"><span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Low Sensitivity</div> <div class="inline-flex items-center gap-2"><span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Locally Owned</div> </div> </div> <div class="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImg, "alt": "Smiling client outdoors in Colorado winter", "widths": [480, 768, 1024, 1280, 1600], "sizes": "(max-width: 768px) 100vw, 48rem", "loading": "eager", "decoding": "async", "class": "block" })} </div> </div> </section>  <section class="mx-auto mt-16 max-w-6xl"> <div class="text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": baTitle, "alt": "Before and After", "widths": [480, 640, 800], "sizes": "(max-width: 768px) 90vw, 48rem", "class": "mx-auto h-auto w-full max-w-2xl", "loading": "lazy", "decoding": "async" })} </div> <p class="mt-3 text-center text-sm text-slate-500">
Real DaVinci Radiance clients Individual results vary.
</p> </section>  <section class="mx-auto mt-16 max-w-7xl"> <div class="grid items-center gap-10 md:grid-cols-2"> <div> <h2 class="text-2xl font-semibold text-slate-900">Whitening in 3 Simple Steps</h2> <ol class="mt-4 space-y-3 text-slate-700"> <li><span class="font-medium text-slate-900">1.</span> Apply whitening gel (upper & lower arch)</li> <li><span class="font-medium text-slate-900">2.</span> Blue LED light activation</li> <li><span class="font-medium text-slate-900">3.</span> Rinse & reveal a radiant smile</li> </ol> <div class="mt-6 flex flex-wrap gap-3"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">Call to Schedule</a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">Text Us a Question</a> </div> </div> <div class="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"> ${renderComponent($$result2, "Image", $$Image, { "src": processImg, "alt": "Client under LED light during whitening", "widths": [480, 768, 1152], "sizes": "(max-width: 768px) 100vw, 42rem", "loading": "lazy", "decoding": "async", "class": "block" })} </div> </div> </section>  <section class="mx-auto mt-16 max-w-7xl rounded-2xl bg-emerald-50/60 p-6 ring-1 ring-emerald-100"> <h2 class="text-2xl font-semibold text-slate-900">Group Events & Specials</h2> <p class="mt-2 text-slate-700">
Planning a big day? We offer <span class="font-semibold">special rates for groups</span>—perfect for wedding parties, engagement shoots,
      birthdays, reunions, prom groups, corporate teams, pageant squads, and content creator bundles.
</p> <ul class="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2"> <li>• Wedding parties & engagement shoots</li> <li>• Birthdays & family reunions</li> <li>• Prom groups & pageant teams</li> <li>• Corporate headshots & team events</li> <li>• Creator/content bundles</li> </ul> <div class="mt-5 flex flex-wrap gap-3"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">Call for a Group Quote</a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="rounded-lg border border-emerald-600 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">Text Your Event Details</a> </div> <p class="mt-2 text-sm text-slate-600">We’ll tailor your session count, timing, and location for your group—ask about on-site options.</p> </section>  <section class="mx-auto mt-16 max-w-7xl"> <div class="flex items-end justify-between gap-4"> <div> <h2 class="text-2xl font-semibold text-slate-900">Clients Love Their Results</h2> ${placeMeta?.rating && placeMeta?.user_ratings_total && renderTemplate`<p class="mt-1 text-slate-600">
Google rating <span class="font-medium">${placeMeta.rating}</span>/5 · ${placeMeta.user_ratings_total} reviews
</p>`} </div> <a href="/reviews" class="text-sm font-semibold text-emerald-700 hover:text-emerald-800">See all reviews →</a> </div> <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${reviews.length === 0 && renderTemplate`<div class="rounded-xl border border-slate-200 p-5 text-slate-600">Reviews will appear here soon.</div>`} ${reviews.map((rv) => renderTemplate`<article class="rounded-xl border border-slate-200 p-5 bg-white shadow-sm"> <div class="flex items-center gap-3"> ${rv.profile_photo_url && renderTemplate`<img${addAttribute(rv.profile_photo_url, "src")}${addAttribute(rv.author_name, "alt")} width="40" height="40" class="h-10 w-10 rounded-full">`} <div> <div class="font-medium text-slate-900">${rv.author_name}</div> <div class="text-sm text-slate-500">${rv.time_desc}</div> </div> </div> <div class="mt-3 text-amber-500"${addAttribute(`${rv.rating} out of 5 stars`, "aria-label")}> ${"\u2605\u2605\u2605\u2605\u2605".slice(0, rv.rating)}<span class="text-slate-300">${"\u2605\u2605\u2605\u2605\u2605".slice(rv.rating)}</span> </div> <p class="mt-3 text-slate-700 whitespace-pre-wrap">${rv.text}</p> </article>`)} </div> </section>  <section class="mx-auto mt-16 max-w-7xl"> <div class="grid gap-6 md:grid-cols-2"> <div class="overflow-hidden rounded-2xl ring-1 ring-black/5"> ${renderComponent($$result2, "Image", $$Image, { "src": smilesImg, "alt": "Happy clients smiling after whitening", "widths": [480, 768, 1e3], "sizes": "(max-width: 768px) 100vw, 36rem", "loading": "lazy", "decoding": "async", "class": "block" })} </div> <div class="grid gap-6"> <div class="overflow-hidden rounded-2xl ring-1 ring-black/5"> ${renderComponent($$result2, "Image", $$Image, { "src": session1, "alt": "In-session whitening with LED light", "widths": [480, 768, 1152], "sizes": "(max-width: 768px) 100vw, 36rem", "loading": "lazy", "decoding": "async", "class": "block" })} </div> <div class="overflow-hidden rounded-2xl ring-1 ring-black/5"> ${renderComponent($$result2, "Image", $$Image, { "src": session2, "alt": "Whitening device in use during session", "widths": [480, 768, 1152], "sizes": "(max-width: 768px) 100vw, 36rem", "loading": "lazy", "decoding": "async", "class": "block" })} </div> </div> </div> </section>  <section class="mx-auto mt-16 max-w-7xl rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"> <div class="grid gap-6 md:grid-cols-3"> <div class="flex items-center gap-3"> <div class="h-10 w-10 overflow-hidden rounded"> ${renderComponent($$result2, "Image", $$Image, { "src": logoDark, "alt": "DaVinci Radiance mark", "widths": [40], "class": "h-10 w-10" })} </div> <div> <div class="font-semibold text-slate-900">Two Colorado Locations</div> <div class="text-sm text-slate-600">Lone Tree & Colorado Springs</div> </div> </div> <ul class="space-y-3 text-sm text-slate-700"> ${SITE.locations.map((loc) => renderTemplate`<li class="rounded-lg border border-slate-200 p-3"> <div class="font-medium">${loc.label}</div> <div class="text-slate-600">${loc.street}</div> <div class="text-slate-600">${loc.city}, ${loc.region} ${loc.postal}</div> </li>`)} </ul> <div class="grid content-start gap-3"> <a${addAttribute(`tel:${SITE.phone}`, "href")} class="rounded-lg bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700">Call Now</a> <a${addAttribute(`sms:${SITE.sms}`, "href")} class="rounded-lg border border-emerald-600 px-5 py-3 text-center font-semibold text-emerald-700 hover:bg-emerald-50">Text Us Today</a> </div> </div> </section>  <div class="h-24 md:hidden"></div> ` })}`;
}, "C:/Users/Shadow/davinci-radiance/src/pages/index.astro", void 0);

const $$file = "C:/Users/Shadow/davinci-radiance/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
