export const site = {
  name: "PT Siva Parama Dhana",
  tagline: "Build For Satisfaction",
  phoneDisplay: "0813 8855 605",
  waNumber: "628138855605",
  address: "Jl. Raya Sukoharjo No. 89, Jetis, Mojokerto, Jawa Timur 61352",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Sukoharjo+No.89+Jetis+Mojokerto",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
