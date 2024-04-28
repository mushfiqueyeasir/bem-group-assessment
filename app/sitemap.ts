import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoute = [
        {
            url: `https://bem-group-assessment.vercel.app/`,
            lastModified: new Date("2023-08-01"),
            changeFrequency: "yearly",
            priority: 1
        },
        {
            url: `https://bem-group-assessment.vercel.app/preview`,
            lastModified: new Date("2023-08-01"),
            changeFrequency: "yearly",
            priority: 0.8
        },
        {
            url: `https://bem-group-assessment.vercel.app/sign-in`,
            lastModified: new Date("2023-08-01"),
            changeFrequency: "yearly",
            priority: 0.8
        }
    ];

    return [...(staticRoute as any)];
}
