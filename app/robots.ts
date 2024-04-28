import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `https://bem-group-assessment.vercel.app/sitemap.xml`,
        host: `https://bem-group-assessment.vercel.app/`
    };
}
