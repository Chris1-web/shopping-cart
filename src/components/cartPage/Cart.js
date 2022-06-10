import "./Cart.css";
import { useEffect, useState } from "react";
import Counter from "../Counter";

export default function Cart({ product, changeQuantity }) {
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
  return (
    <div className="cart-card-box">
      <div className="cart-overview-bottom">
        <img src={product.src} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      </div>
      <div className="bottom">
        <Counter
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          changeInputQuantity={changeInputQuantity}
          inputValue={inputValue}
        />
        {/* <div className="form">
          <button className="decrement">-</button>
          <input
            type="number"
            min="1"
            value={product.quantity}
            placeholder="1"
          />
          <button className="increment">+</button>
        </div> */}
        <button className="remove-item">x Remove Item</button>
      </div>
    </div>
  );
}
