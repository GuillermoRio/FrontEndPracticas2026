import { Product } from "@/types";
import { useProductContext } from "@/context/productContext";
import { useRouter } from "next/navigation";
import './product.css'

const ProductList = ({ product }: { product: Product }) => {
  const { addProduct, removeProduct, isSelected } = useProductContext();

  const router = useRouter();
  const selected = isSelected(product.id); 


  const handleToggle = () => {
    isSelected(product.id) ? removeProduct(product.id) : addProduct(product);
  };

  return (
    <div className="prodructGrid">
      <img src={product.images[0]} alt={product.title} />
      <div className="informationGrid">
        <div>
          <p>Category: {product.category}</p>
          <h2>{product.title}</h2>
          <p><strong>{product.price}€</strong></p>
        </div>
        <div className="actions">
            <button onClick={() => router.push(`/product/${product.id}`)}>
              Ver detalle
            </button>        
            <button onClick={handleToggle}>
              {isSelected(product.id) ? "Quitar" : "Añadir"}
            </button>
        </div>
      </div>  
    </div>
  );
};

export default ProductList;