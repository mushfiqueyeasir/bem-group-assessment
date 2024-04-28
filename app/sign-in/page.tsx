import { SeoContent } from "@/SeoContent/SeoContent";
import SignInForm from "@/components/SignIn/SignInForm";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent.baseSeo);

export default function SingInPage() {
    return (
        <>
            <SignInForm />
        </>
    );
}
