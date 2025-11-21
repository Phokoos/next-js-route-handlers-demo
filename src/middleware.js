import {NextResponse} from "next/server";

export function middleware(req) {
    console.log('Middleware executed for request:', req.url);

    const response = NextResponse.next()
    const themePreference = req.cookies.get('theme')
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    return response;
}

export const config = {
    matcher: "/profile/api",
}