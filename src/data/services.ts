const _services = [
  {
    id: "snekkerarbeid",
    title: "Snekkerarbeid",
    description:
      "Vi tar på oss alle slags snekkerarbeid, fra små reparasjoner til store prosjekter.",
    projects: [
      {
        title: "Llund 22",
        image: "/images/snekkerarbeid.jpg",
        alt: "Moderne snekkerarbeid utført av Zhizhovski Bygg AS",
        text: "Her har vi utført snekkerarbeid for en moderne enebolig. Vi har fokusert på detaljer og kvalitet i arbeidet vårt.",
        linkHref: "/projects",
        linkText: "Se mer om prosjektet",
      },
      {
        title: "Mortrensrud allé 5",
        image: "/images/Mortrensrud.jpg",
        alt: "Snøring av terrasse og inngangsparti utført av Zhizhovski Bygg AS",
        text: "Kan snkeres på alle slags terrasser og inngangspartier. Vi har fokusert på detaljer og kvalitet i arbeidet vårt.",
        linkHref: "/contact",
        linkText: "Kontakt oss ved interesse",
      },
    ],
  },
  {
    id: "håndverkertjenester",
    title: "Håndverkertjenester",
    description:
      "Vi tilbyr en rekke håndverkertjenester for å gi ditt hjem det perfekte utseendet.",
    projects: [],
  },
  {
    id: "malerarbeid",
    title: "Malerarbeid",
    description: "Vi tilbyr profesjonell maling for både interiør og eksteriør.",
    projects: [],
  },
];

export async function getServices() {
  // Later can be replaced this with a fetch() to an API or database call.
  return _services;
}
