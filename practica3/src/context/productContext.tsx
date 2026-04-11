'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Product } from "@/types";

type ProductContextType = {
  selectedProducts: Product[];
  addProduct: (product: Product) => void; 
  removeProduct: (id: number) => void;
  isSelected: (id: number) => boolean;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('productos');
    if (stored) {
      setSelectedProducts(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const addProduct = (product: Product) => {
    setSelectedProducts(prev => [...prev, product]);
  };

  const removeProduct = (id: number) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== id));
  };

  const isSelected = (id: number) => {
    return selectedProducts.some(p => p.id === id);
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, addProduct, removeProduct, isSelected }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};