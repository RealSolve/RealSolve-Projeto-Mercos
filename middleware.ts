import { type NextRequest, NextResponse } from "next/server"
import { decrypt } from "@/lib/auth"

// Protected routes that require authentication
const protectedRoutes = ["/dashboard", "/profile", "/admin"]
const authRoutes = ["/login", "/register"]

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))
  const isAuthRoute = authRoutes.includes(path)

  const cookie = req.cookies.get("session")?.value

  let session = null
  if (cookie) {
    try {
      session = await decrypt(cookie)
    } catch (error) {
      // Invalid or expired token - clear the cookie
      console.log("[v0] Invalid JWT token, clearing session")
      const response = NextResponse.next()
      response.cookies.set("session", "", { expires: new Date(0) })
      session = null
    }
  }

  // Redirect to login if accessing protected route without session
  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }

  // Redirect to dashboard if accessing auth routes with valid session
  if (isAuthRoute && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
