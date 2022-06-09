import { useEffect, useState } from "react";

export default function ProductCard({
  product,
  addQuantity,
  reduceQuantity,
  changeQuantity,
}) {
  const [inputValue, setInputValue] = useState("");
  const [changeInput, setChangeInput] = useState(false);

  useEffect(() => {
    setInputValue(product.quantity);
    return () => setInputValue(product.quantity);
  }, []);

  useEffect(() => {
    if (changeInput) {
      setInputValue(inputValue);
      console.log(inputValue);
      changeQuantity(product, inputValue);
    }
    return () => setChangeInput(false);
  }, [inputValue]);

  const increaseQuantity = (e, product) => {
    e.preventDefault();
    addQuantity(product, 1);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    reduceQuantity(product, 1);
  };

  const changeInputQuantity = (e, product) => {
    setInputValue(e.target.value);
    setChangeInput(true);
  };

  return (
    <div className="product-card">
      <img
        src={product.src}
        alt={product.name}
        className="product-card-image"
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="form">
        <button
          className="decrement"
          onClick={(e) => decreaseQuantity(e, product)}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={inputValue}
          // placeholder={product.quantity}
          onChange={(e) => changeInputQuantity(e, product)}
        />
        <button
          className="increment"
          onClick={(e) => increaseQuantity(e, product)}
        >
          +
        </button>
      </div>
      <button className="add-to-cart-btn">Add To Cart</button>
    </div>
  );
}
