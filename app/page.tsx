import { SeoContent } from "@/SeoContent/SeoContent";
import Hero from "@/components/Hero";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent.baseSeo);

 const HomePage=()=> {
    return (
        <>
         <Hero/>
        </>
    );
}

export default HomePage