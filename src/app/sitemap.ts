import type { MetadataRoute } from "next";

const baseUrl = "https://zhizhovski-bygg.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/about-us", "/contact", "/projects", "/services"];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
