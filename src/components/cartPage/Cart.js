import "./Cart.css";
import MountainBicycle from "../images/mountainBike.jpg";

export default function Cart({ product }) {
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
        <div className="form">
          <button className="decrement">-</button>
          <input
            type="number"
            min="1"
            value={product.quantity}
            placeholder="1"
          />
          <button className="increment">+</button>
        </div>
        <button className="remove-item">x Remove Item</button>
      </div>
    </div>
  );
}
