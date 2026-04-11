'use client';
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { getAllProducts } from "@/lib/api/product";
import ProductList from "./components/productList/product";
import SearchBar from "./components/search/search";
import './globals.css'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllProducts()
      .then(prod => setProducts(prod))
  }, []);

  const filtered = products.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
      <SearchBar setSearch={setSearch} />      
      <div className="productsGrid">
        {filtered.map(product => (         
          <ProductList key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}