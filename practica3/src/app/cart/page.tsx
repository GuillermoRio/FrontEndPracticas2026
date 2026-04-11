'use client';
import { useProductContext } from "@/context/productContext";
import { useRouter } from "next/navigation";
import ProductList from "../components/productList/product";

export default function cart() {
  const { selectedProducts } = useProductContext();
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>← Volver</button>
      <h1>Productos seleccionados</h1>

      {selectedProducts.length === 0 ? (
        <div>
          <p>No tienes productos seleccionados</p>
          <button onClick={() => router.push('/')}>Ir al catálogo</button>
        </div>
      ) : (
        <div>
          {selectedProducts.map(product => (
            <ProductList key={product.id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
}