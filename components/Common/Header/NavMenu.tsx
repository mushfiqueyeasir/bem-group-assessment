"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "@/content/menuData";

const NavMenu = () => {
    const pathname = usePathname();
    return (
        <div className="hidden w-full  lg:block">
            <div className="flex items-center justify-center gap-x-10">
                {menuData.map((item, index) => (
                    <div key={index}>
                        <Link
                            className={`whitespace-nowrap py-4 text-xs  uppercase  transition hover:text-primary hover:duration-300 lg:text-sm ${pathname===item.path ? "text-primary font-semibold":"text-black font-normal"}`}
                            href={item.path}
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavMenu;
