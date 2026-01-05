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
      label: "Colorado Springs",
      locWidge:"Jeunesse Salon & Spa",
      street: "13570 Meadowgrass Dr, Suite #13",
      city: "Colorado Springs",
      region: "CO",
      postal: "80921",
      review:"5",
      phoneHuman: "(719) 684-5551",
      phone: "+17196845551"
    },
    {
      label: "Centennial",
      locWidge:"Solera Salon Suites",
      street: "8770 E Arapahoe Rd, Suite 101",
      city: "Centennial",
      region: "CO",
      postal: "80112",
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
