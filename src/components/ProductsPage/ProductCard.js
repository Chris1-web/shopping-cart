import { useEffect, useState } from "react";
import Counter from "../Counter";
// import uniqid from "uniqid";
// uniqid();

export default function ProductCard({ product, addProductToCart }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(product.quantity);
    return () => setInputValue(product.quantity);
  }, []);

  const addToCart = (product) => {
    addProductToCart(product);
  };

  return (
    <article className="product-card">
      <img
        src={product.src}
        alt={product.name}
        className="product-card-image"
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        className="add-to-cart-btn"
        disabled={!inputValue || +inputValue <= 0}
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </article>
  );
}
