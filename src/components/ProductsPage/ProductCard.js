export default function ProductCard({ product, addQuantity, reduceQuantity }) {
  const increaseQuantity = (e, product) => {
    e.preventDefault();
    addQuantity(product, 1);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    reduceQuantity(product, 1);
  };

  const changeQuatity = () => {
    console.log("input is changed");
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
          value={product.quantity}
          onChange={changeQuatity}
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
