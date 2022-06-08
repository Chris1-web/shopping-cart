export default function ProductCard({ product }) {
  const showCurrentProduct = (product) => {
    console.log(product.name);
  };

  return (
    <div
      className="product-card"
      onClick={() => {
        showCurrentProduct(product);
      }}
    >
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
