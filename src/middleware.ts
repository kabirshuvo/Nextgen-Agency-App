import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/sign-in",
    "/sign-up",
    "/verify/:path*",
    "/api/check-username-unique",
    "/admin/:path*", // Add admin routes
  ],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  // Redirect to home page if the user is already authenticated
  // and trying to access sign-in, sign-up, or home page
  if (
    token &&
    (url.pathname.startsWith("/sign-in") ||
      url.pathname.startsWith("/sign-up") ||
      url.pathname.startsWith("/verify"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect to sign-in if the user is not authenticated and trying to access protected routes
  if (
    !token &&
    (url.pathname.startsWith("/dashboard") || url.pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Add any admin-specific checks here, e.g., check if the user has admin privileges
  if (token && url.pathname.startsWith("/admin") && !token.isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
