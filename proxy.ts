import {auth} from "@/lib/auth"
import { NextURL } from "next/dist/server/web/next-url";

export default auth((req: { auth?: any; nextUrl?: any }) => {
  const isLoggedIn = !!req.auth
  const {nextUrl} = req

  const isPublicRoute =
    nextUrl.pathname === "/" ||
    nextUrl.pathname.startsWith('/cars')
    nextUrl.pathname === "/login" ||
    nextUrl.pathname === "/register"


  const isApiAuthRoute = nextUrl.pathname.startsWith('/api/auth')
  const isAdminRoute = nextUrl.pathname.startsWidth('/admin')


  if(isApiAuthRoute) return

  if(isAdminRoute) {
    if(!isLoggedIn || req.auth?.user?.role !== "ADMIN") {
      return Response.redirect(new URL("/", nextUrl))
    }
    return
  }

  if(isLoggedIn && (nextUrl.pathname === "/login" || nextUrl.pathname === "register")) {
      return Response.redirect(new URL('/', nextUrl))
  }

  if(!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/login', nextUrl))
  }

  return
})


export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
