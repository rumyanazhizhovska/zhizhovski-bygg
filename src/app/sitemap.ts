import type { MetadataRoute } from "next";
import { PAGES as pages } from "../constants/pages";

const baseUrl = "https://zhizhovski-bygg.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {

    return pages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1 : 0.8,
    }));
}
