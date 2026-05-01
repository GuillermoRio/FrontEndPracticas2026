import { NextRequest, NextResponse } from "next/server";

export const proxy =(request: NextRequest) => {
  console.log("URL:", request.url);

  // 🔥 leer token de cookies
  const token = request.cookies.get("token");

  // ❌ si no hay token → redirigir a login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ si hay token → dejar pasar
  return NextResponse.next();
}

// 🔥 rutas protegidas
export const config = {
  matcher: [
    "/", 
    "/perfil/:path*", 
    "/post/:path*"
  ],
};