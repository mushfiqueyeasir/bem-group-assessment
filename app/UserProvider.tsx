"use client";
import React, { createContext, useState, useEffect } from "react";
export const USER_CONTEXT = createContext<any | undefined>(undefined);
const UserProvider = ({ children }) => {
    const [user, setUser] = useState<any>();
    const [refetchData, setRefetchData] = useState(false);

    useEffect(() => {
        const userCookie = getCookie("user");
        if (userCookie) {
            setUser(userCookie);
        } else {
            setUser(null);
        }
    }, [refetchData]);
    const refetch = () => setRefetchData((prevState) => !prevState);

    return <USER_CONTEXT.Provider value={{ user, refetch }}>{children}</USER_CONTEXT.Provider>;
};

export default UserProvider;

function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Check if this cookie name matches the name we're looking for
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}
