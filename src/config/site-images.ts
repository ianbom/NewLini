export const siteImages = {
  hero: {
    person: "/placeholders/hero-person.svg",
    website: "/placeholders/hero-website.svg",
  },
  portfolio: {
    studioNoirva: "/placeholders/portfolio-studio-noirva.svg",
    arvena: "/placeholders/portfolio-arvena.svg",
    galeryaLiving: "/placeholders/portfolio-galerya.svg",
    noirelStudio: "/placeholders/portfolio-noirel.svg",
  },
  services: {
    companyProfile: "/placeholders/service-company-profile.svg",
    landingPage: "/placeholders/service-landing-page.svg",
    ecommerce: "/placeholders/service-ecommerce.svg",
    customApp: "/placeholders/service-custom-app.svg",
  },
  footer: {
    building: "/placeholders/footer-building-facade.png",
  },
} as const;

export type SiteImages = typeof siteImages;
