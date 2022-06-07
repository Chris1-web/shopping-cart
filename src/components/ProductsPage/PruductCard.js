export default function ProductCard(props) {
  return (
    <div key={props.index}>
      <img src={props.product.src} alt="bicycle" />
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}
