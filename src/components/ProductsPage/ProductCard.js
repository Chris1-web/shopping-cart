export default function ProductCard({ product, addProductToCart }) {
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
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </article>
  );
}
