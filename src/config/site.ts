// src/config/site.ts
export const SITE = {
  name: "DaVinci Radiance",
  url: "https://davinciradiance.com",
  phoneHuman: "(303) 662-8422",
  phone: "+17196845551",        // tel: format (numbers only, leading +1 if US)
  sms: "+17196845551",          // sms: link target
  email: "davinciradiance@gmail.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Process", href: "/process" },
    { label: "Results", href: "/results"},
    { label: "FAQ", href: "/#faq" },
    { label: "About", href: "/about" }
  ],
  locations: [
    {
      label: "North Colorado Springs",
      street: "13570 Meadowgrass Dr, Suite No. 13 (Jeunesse Salon & Spa Suites Inside the Accelerated Wealth Building)",
      city: "Colorado Springs",
      region: "CO",
      postal: "80921",
      review:"5",
      phoneHuman: "(719) 684-5551",
      phone: "+17196845551"
    },
    {
      label: "Lone Tree",
      street: "8401 Park Meadows Center Dr, Level 1 (Near Hollister)",
      city: "Lone Tree",
      region: "CO",
      postal: "80124",
      review:"4.8",
      phoneHuman: "(303) 662-8422",
      phone: "+13036628422"
    }
  ],
  social: {
    facebook: "https://www.facebook.com/DaVinciRadiance/",
    instagram: "https://www.instagram.com/davinciradiance/"
  }
} as const;
