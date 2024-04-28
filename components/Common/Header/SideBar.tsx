/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useContext } from "react";
import menuData from "@/content/menuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { USER_CONTEXT } from "@/app/UserProvider";

const SideBar = () => {
    const pathname = usePathname();
    const { user } = useContext(USER_CONTEXT);
    return (
        <div className="z-[999] min-h-full bg-white">
            <div className="p-4">
                <Link href="/" className="md:py-2">
                    <img src="/images/logo/logo.png" alt="Logo" loading="lazy" className="w-16" />
                </Link>
            </div>

            {user && (
                <ul className="menu w-80  px-4 text-black">
                    {menuData.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={`whitespace-nowrap py-2 text-sm  uppercase  transition hover:text-primary hover:duration-300 ${
                                    pathname === item.path ? "font-semibold text-primary" : "font-normal text-black"
                                }`}
                                href={item.path}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SideBar;
