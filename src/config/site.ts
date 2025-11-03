// src/config/site.ts
export const SITE = {
  name: "DaVinci Radiance",
  url: "https://davinciradiance.com",
  phoneHuman: "(303) 662-8422",
  phone: "+13036628422",        // tel: format (numbers only, leading +1 if US)
  sms: "+13036628422",          // sms: link target
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
} as const;
