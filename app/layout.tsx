import Header from "@/components/Common/Header";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en" className="bg-white text-black">
            <body>
                <Header />
                <main className="min-h-[90vh]">{children}</main>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </body>
        </html>
    );
}
