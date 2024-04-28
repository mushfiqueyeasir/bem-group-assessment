import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
    let user = request.cookies.get("user");
    if (user) {
        if (request.nextUrl.pathname.startsWith("/sign-in")) {
            return NextResponse.redirect(new URL("/", request.url));
        } else {
            return NextResponse.next();
        }
    } else {
        if (!request.nextUrl.pathname.startsWith("/sign-in")) {
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }
    }
};

export const config = {
    matcher: ['/', '/preview',"/sign-in"],
  }