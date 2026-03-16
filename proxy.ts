import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if(req.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next()
  }

  const isPublic =
    pathname === "/" ||
    pathname.startsWith("/cars") ||
    pathname === "/login" ||
    pathname === "/register";

  if (isPublic) return NextResponse.next();

  const token = req.cookies.get("next-auth.session-token")?.value;
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  let userRole = "USER";
  try {
    const decoded: any = jwt.decode(token);
    if (decoded?.role) userRole = decoded.role;
  } catch (err) {
    return NextResponse.redirect("/login");
  }

  if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect("/");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
