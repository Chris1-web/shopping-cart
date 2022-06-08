export default function ProductCard({ product, showClickedProduct }) {
  return (
    <div className="product-card">
      <img
        src={product.src}
        alt={product.name}
        className="product-card-image"
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}
