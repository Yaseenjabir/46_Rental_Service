import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token");

  if (authToken) {
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/studio", request.url));
    }
  } else {
    if (request.nextUrl.pathname.startsWith("/studio")) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth", "/studio/:path*"],
};
