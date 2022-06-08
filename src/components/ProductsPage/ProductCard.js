export default function ProductCard({ product }) {
  const increaseQuantity = (e) => {
    e.preventDefault();
  };
  const decreaseQuantity = (e) => {
    e.preventDefault();
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
      <form>
        <button className="decrement" onClick={increaseQuantity}>
          -
        </button>
        <input type="number" min="1" value={1} />
        <button className="increment" onClick={decreaseQuantity}>
          +
        </button>
      </form>
      <button className="add-to-cart-btn">Add To Cart</button>
    </div>
  );
}
