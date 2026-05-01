import { NextRequest, NextResponse } from "next/server";

export const proxy =(request: NextRequest) => {
  console.log("URL:", request.url);
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/", 
    "/perfil/:path*", 
    "/post/:path*"
  ],
};