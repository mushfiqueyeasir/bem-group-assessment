import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
    let user = request.cookies.get("user");

    return NextResponse.next()
    
    // if (user) {
    //     if (request.nextUrl.pathname.startsWith("/sign-in")) {
    //         return NextResponse.redirect(new URL("/", request.url));
    //     } else {
    //         return NextResponse.next();
    //     }
    // } else {
    //     return NextResponse.redirect(new URL("/sign-in", request.url));
    // }

};

