import { SeoContent } from "@/SeoContent/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent.baseSeo);

 const HomePage=()=> {
    return (
        <section className="container py-10">

            <form></form>
         
            Home Page
        </section>
    );
}

export default HomePage