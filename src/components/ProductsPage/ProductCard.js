import { useEffect, useState } from "react";
import Counter from "../Counter";
// import uniqid from "uniqid";
// uniqid();

export default function ProductCard({
  product,
  changeQuantity,
  addProductToCart,
}) {
  const [inputValue, setInputValue] = useState("");
  const [changeInput, setChangeInput] = useState(false);

  useEffect(() => {
    setInputValue(product.quantity);
    return () => setInputValue(product.quantity);
  }, []);

  useEffect(() => {
    if (changeInput) {
      changeQuantity(product, inputValue);
      setChangeInput(false);
    }
    return () => setChangeInput(false);
  }, [inputValue]);

  const increaseQuantity = (e) => {
    e.preventDefault();
    setInputValue((prevValue) => +prevValue + 1);
    setChangeInput(true);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    // do not go lower if input value is already 0
    setInputValue((prevValue) => +prevValue - 1);
    setChangeInput(true);
  };

  const changeInputQuantity = (e) => {
    setInputValue(e.target.value);
    setChangeInput(true);
  };

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
      <Counter
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        changeInputQuantity={changeInputQuantity}
        inputValue={inputValue}
      />
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
