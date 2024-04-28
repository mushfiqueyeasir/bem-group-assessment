"use client";
import React, { useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { USER_CONTEXT } from "@/app/UserProvider";

const SignInForm = () => {
    const {refetch} = useContext(USER_CONTEXT)
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const formRef = useRef(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(formRef.current);
        const username = formData.get("username");
        const password = formData.get("password");

        try {
            const response = await fetch("https://market.vemate.com/api/v1/account/public/users/signin/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error("Failed to sign in");
            }
            const userData = await response.json();
            document.cookie = `user=${JSON.stringify(userData)};path=/`;
            setLoading(false);
            toast.success('Welcome')
            refetch()
            router.replace("/");
        } catch (error) {
            toast.error(error.message)
            setLoading(false);
        }
    };

    return (
        <section className="flex mx-auto min-h-[80vh] xl:max-w-[40%]  2xl:max-w-[20%] px-4 items-center justify-center py-10">
            <div>
                <h3 className="text-center font-sans text-xl font-medium text-secondary sm:leading-8 md:text-2xl">
                    Sign In
                </h3>
                <p className="mt-1 text-center text-base font-normal text-base-200">Enter your login information</p>
                <div className="mt-7">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            className="w-full rounded-lg border border-base-100 bg-white px-5 py-3 text-xl outline-none placeholder:text-lg"
                            placeholder="Username or Email"
                            type="text"
                            name="username"
                            required
                        />
                        <input
                            className="mt-6 w-full rounded-lg border border-base-100 bg-white px-5 py-3 text-xl outline-none placeholder:text-lg"
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                        />
                     
                        <button
                            type="submit"
                            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-4 rounded-md bg-primary px-7 py-4 text-base font-medium leading-6 text-white  transition ease-in-out hover:bg-secondary hover:duration-700"
                        >
                            {loading && <span className="loading loading-spinner "></span>}
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignInForm;
