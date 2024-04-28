const path = require("path");
import { Metadata } from "next";

export function generateMetadata(seoContent) {
    const { title, description, image, siteUrl, keywords, tags } = seoContent;

    const metadata: Metadata = {
        title: title,
        description: description,
        keywords: keywords ? keywords : tags,
        openGraph: {
            title: title,
            description: description,
            images: [{ url: new URL(image, process.env.NEXT_PUBLIC_SITE_URL).href }],
            url: siteUrl,
            type: "website"
        },
        twitter: {
            title: title,
            description: description,
            images: [{ url: new URL(image, process.env.NEXT_PUBLIC_SITE_URL).href }],
            card: "summary_large_image"
        },
        robots: "index, follow",
        creator: "MyTyTech",
        publisher: "MyTyTech"
    };

    return metadata;
}
