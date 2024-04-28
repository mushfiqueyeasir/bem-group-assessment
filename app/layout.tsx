import Header from "@/components/Common/Header";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "./UserProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en" className="bg-white text-black">
            <UserProvider>
                <body>
                    <Header />
                    <main className="min-h-[90vh]">{children}</main>
                    <ToastContainer
                        position="top-right"
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
            </UserProvider>
        </html>
    );
}
