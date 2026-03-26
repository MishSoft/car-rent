import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api")) return NextResponse.next();

  const isPublic =
    pathname === "/" ||
    pathname.startsWith("/cars") ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/uploads") ||
    pathname.startsWith("/icons");

  if (isPublic) return NextResponse.next();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET || "super-secret-morent-2026" });

  if (!token) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }


  const userRole = token.role || "USER";

  if (pathname.startsWith("/admin") && userRole !== "ADMIN") {

    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
