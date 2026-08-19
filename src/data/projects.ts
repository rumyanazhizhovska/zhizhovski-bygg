import type { Project } from "@/types/portfolio";
import { SERVICE_CATEGORIES } from "@/data/services";

/**
 * Prosjektbasen er skilt fra tjenestene fordi ett prosjekt kan dekke flere
 * tjenestepunkter. Legg bilde-referanser i `PROJECT_MEDIA` og koble dem til
 * prosjekter via `media`.
 */
export const PROJECTS: readonly Project[] = [
  {
    id: "erich-mogensons-vei-26",
    title: "Erich Mogensøns vei 26",
    summary:
      "Soveromsrenovering med fokus på gulv- og veggoppgradering, gjennom isolasjon og gipsing.",
    featuredCategoryId: "snekkerarbeid",
    serviceIds: ["vegger-og-romlosninger", "gipsing-og-taksenking", "gulv", "helsparkling", "maling"],
    location: "Erich Mogensøns vei 26, Oslo",
    period: "Aug, 2022",
    media: ["erich-mogensons-vei-26"],
  },
  {
    id: "mortrensrud-alle-5",
    title: "Mortrensrud allé 5",
    summary:
      "Arbeid på terrasse og inngangsparti, med fokus på varige løsninger og et helhetlig uttrykk.",
    featuredCategoryId: "snekkerarbeid",
    serviceIds: [],
  },
];

const knownServiceIds = new Set<string>();

SERVICE_CATEGORIES.forEach((category) => {
  category.services.forEach((service) => {
    knownServiceIds.add(service.id);
  });
});


PROJECTS.forEach((project) => {
  const unknownServiceIds = project.serviceIds.filter(
    (serviceId) => !knownServiceIds.has(serviceId),
  );

  if (unknownServiceIds.length > 0) {
    throw new Error(
      `Prosjektet "${project.id}" bruker ukjente serviceIds: ${unknownServiceIds.join(", ")}`,
    );
  }
});

function resolveFeaturedProjectsForCategory(categoryId: string) {
  return PROJECTS.filter(
    (project) => project.featuredCategoryId === categoryId,
  );
}

function resolveProjectsForService(serviceId: string) {
  return PROJECTS.filter((project) => project.serviceIds.includes(serviceId));
}

export async function getFeaturedProjectsForCategory(categoryId: string) {
  return resolveFeaturedProjectsForCategory(categoryId);
}

export async function getProjectsForService(serviceId: string) {
  return resolveProjectsForService(serviceId);
}

export async function getProjects() {
  return PROJECTS;
}

export async function getProjectById(projectId: string) {
  return PROJECTS.find((project) => project.id === projectId) ?? null;
}
