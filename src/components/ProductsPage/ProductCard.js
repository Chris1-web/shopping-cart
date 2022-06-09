import { useEffect, useState } from "react";
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
    // do not go lower if input value is already 1
    if (inputValue <= 1) return;
    setInputValue((prevValue) => +prevValue - 1);
    setChangeInput(true);
  };

  const changeInputQuantity = (e) => {
    if (e.target.value < 0) return;
    setInputValue(e.target.value);
    setChangeInput(true);
  };

  const addToCart = (product) => {
    addProductToCart(product);
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
        <button className="decrement" onClick={(e) => decreaseQuantity(e)}>
          -
        </button>
        <input
          type="number"
          min="1"
          value={inputValue}
          onChange={(e) => changeInputQuantity(e)}
        />
        <button className="increment" onClick={(e) => increaseQuantity(e)}>
          +
        </button>
      </div>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}
