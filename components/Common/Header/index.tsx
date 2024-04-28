/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import JoinAndCart from "./JoinAndCart";
import NavMenu from "./NavMenu";
import SideBar from "./SideBar";
import { cookies } from 'next/headers'

const Header = () => {
    const cookieStore = cookies()
    const user = cookieStore.get('user')
    return (
        <div className="drawer bg-white md:z-[999] lg:sticky lg:top-0">
            <input id="sideBar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <header className="shadow">
                    <section className="py-3">
                        <div className="container flex items-center justify-between">
                            <Link href="/" className="md:py-2">
                                <img src="/images/logo/logo.png" alt="Logo" loading="lazy" className="w-12 md:w-16" />
                            </Link>
                            <div className="hidden  w-full justify-center md:flex">
                                <NavMenu />
                            </div>

                            <div className="flex gap-x-4">
                                <JoinAndCart user={user}/>
                                <label
                                    htmlFor="sideBar"
                                    className="flex items-center gap-4 rounded-md p-2 text-3xl hover:text-primary lg:hidden"
                                >
                                    <TbMenu2 />
                                </label>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
            <div className="drawer-side !z-[9999] ">
                <label htmlFor="sideBar" aria-label="close sidebar" className="drawer-overlay "></label>

                <SideBar />
            </div>
        </div>
    );
};

export default Header;
