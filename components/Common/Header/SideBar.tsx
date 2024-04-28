/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import menuData from "@/content/menuData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
    const pathname = usePathname();
    return (
        <div className="min-h-full bg-white z-[999]">
            <div className="p-4">
                <Link href="/" className="md:py-2">
                    <img src="/images/logo/logo.png" alt="Logo" loading="lazy" className="w-16" />
                </Link>
            </div>

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
        </div>
    );
};

export default SideBar;
