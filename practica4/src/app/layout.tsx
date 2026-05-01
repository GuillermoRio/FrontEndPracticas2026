import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navegationBar/navegationBar";

export const metadata: Metadata = {
  title: "NebrijaSocial",
  description: "Red social de la Universidad Nebrija",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <body>
          {children}
        </body>
      </body>
    </html>
  );
}
