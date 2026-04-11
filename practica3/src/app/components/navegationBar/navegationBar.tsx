'use client';
import { useRouter } from "next/navigation";
import { useProductContext } from "@/context/productContext";
import './navegationBar.css'

const NavBar = () => {
  const router = useRouter();
  const { selectedProducts } = useProductContext();

  return (
    <div className="nav">
      <h1 className='title' onClick={() => router.push('/')}>Mi Tienda</h1>
      <div className="buttonDiv">
        <button className="buttons" onClick={() => router.push('/')}>Inicio</button>
        <button className="buttons" onClick={() => router.push('/cart')}>
          Seleccionados ({selectedProducts.length})
        </button>
      </div>
    </div>
  );
};

export default NavBar;