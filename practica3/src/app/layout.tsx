import { ProductProvider } from "@/context/productContext";
import NavBar from "./components/navegationBar/navegationBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <NavBar />
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}