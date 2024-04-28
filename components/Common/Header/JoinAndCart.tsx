"use client";
import { removeCookie } from "@/utility/cookie";
import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { toast } from "react-toastify";
import { USER_CONTEXT } from "@/app/UserProvider";
const JoinAndCart = () => {
    const { user, refetch } = useContext(USER_CONTEXT);
    const router = useRouter();
    const handleLogout = async () => {
        removeCookie("user");
        await refetch();
        toast.info("Until next time!");
        router.replace("/sign-in");
    };
    return (
        <div className="flex">
            <div>
                {user ? (
                    <button
                        onClick={handleLogout}
                        className="tooltip tooltip-left tooltip-primary block rounded-lg bg-secondary/10 p-2 text-2xl text-red-500"
                        data-tip="Log Out"
                    >
                        <IoLogOut />
                    </button>
                ) : (
                    <Link
                        href="/sign-in"
                        className="tooltip tooltip-left tooltip-primary block rounded-lg bg-secondary/10 p-2 text-2xl text-primary"
                        data-tip="Sing In"
                    >
                        <FaUser />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default JoinAndCart;
