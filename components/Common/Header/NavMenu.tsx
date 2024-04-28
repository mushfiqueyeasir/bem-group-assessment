"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "@/content/menuData";
import { USER_CONTEXT } from "@/app/UserProvider";

const NavMenu = () => {
    const pathname = usePathname();
    const { user } = useContext(USER_CONTEXT);
    return (
        <div className="hidden w-full  lg:block">
            {user && (
                <div className="flex items-center justify-center gap-x-10">
                    {menuData.map((item, index) => (
                        <div key={index}>
                            <Link
                                className={`whitespace-nowrap py-4 text-xs  uppercase  transition hover:text-primary hover:duration-300 lg:text-sm ${
                                    pathname === item.path ? "font-semibold text-primary" : "font-normal text-black"
                                }`}
                                href={item.path}
                            >
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavMenu;
