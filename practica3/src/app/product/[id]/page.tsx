'use client';
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types";
import { getProdudctById } from "@/lib/api/product";
import { AxiosError } from "axios";
import ProductCard from "@/app/components/productCard/product";
import './page.css'

export default function DetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProdudctById(Number(id))
      .then(data => setProduct(data))
      .catch((e: AxiosError) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <button onClick={() => router.back()}>Volver</button>

      {loading && <h1>Cargando...</h1>}
      {error && <h1>Error: {error}</h1>}

      {!loading && !error && product && (
        <>
          <ProductCard  key={product.id} product={product}></ProductCard>
        </>
      )}
    </div>
  );
}