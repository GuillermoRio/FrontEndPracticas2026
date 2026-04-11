import { Product } from "@/types";
import { useProductContext } from "@/context/productContext";
import './product.css'

const ProductCard = ({ product }: { product: Product }) => {
  const { addProduct, removeProduct, isSelected } = useProductContext();
  
  const selected = product ? isSelected(product.id) : false;

  const handleToggle = () => {
    isSelected(product.id) ? removeProduct(product.id) : addProduct(product);
  };

  return (
    <div className="grid">
        <div className="photos">
            {product.images.map((img, index) => (
                <img key={index} src={img} alt={`${product.title} ${index}`} />
            ))}
        </div>

          <div className="info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Marca: {product.brand}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={handleToggle}>
              {selected ? "Quitar" : "Añadir"}
            </button>
        </div>
    </div>
  );
};

export default ProductCard;