import { SeoContent } from "@/SeoContent/SeoContent";
import Preview from "@/components/Preview/Preview";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent.baseSeo);

export default async function PreViewPage() {
    let body = null
    try {
        const templateData = await fetch(process.env.NEXT_PUBLIC_TEMPLATE_API, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                "Content-Type": "application/json"
            },
            next: { revalidate: 10 }
        });

        if (templateData.ok) {
            body = await templateData.json();
        } else {
            console.error("Failed to fetch data:", templateData.statusText);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return (
        <section className="container text-center ">
            <Preview body={body?.body} />
        </section>
    );
}
