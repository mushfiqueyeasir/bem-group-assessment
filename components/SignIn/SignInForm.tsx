"use client";
import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation'

const SignInForm = () => {
    const [loading,setLoading]=useState(false)
    const router = useRouter();
    const formRef = useRef(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
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
            setLoading(false)
            router.replace("/");
        } catch (error) {
            console.error("Sign in error:", error.message);
            setLoading(false)

        }
    };

    return (
        <section className="mx-auto flex min-h-[80vh] max-w-[20%] items-center justify-end py-10">
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
                        <div className="my-6 flex items-center justify-between">
                            <label className="cursor-pointer text-base">
                                <input
                                    className="h-4 w-4 cursor-pointer"
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                />
                                <span className="ml-2">Remember Me</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-4 rounded-md bg-primary px-7 py-4 text-base font-medium leading-6 text-white  transition ease-in-out hover:bg-secondary hover:duration-700"
                        >
                           {loading&& <span className="loading loading-spinner "></span>}
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignInForm;
