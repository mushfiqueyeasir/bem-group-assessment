import { SeoContent } from "@/SeoContent/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent.baseSeo);

export default function SingInPage() {
    return (
        <section className="container text-center py-10">
            <h1>This is Preview Page</h1>
        </section>
    );
}
