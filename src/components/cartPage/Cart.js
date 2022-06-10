import cartLogo from "../images/cart-logo.png";
import "./Cart.css";
import MountainBicycle from "../images/mountainBike.jpg";

export default function Cart({ toggleCart }) {
  const closeCart = () => {
    toggleCart();
  };
  return (
    <>
      <div className="cart-overview-bottom">
        <img src={MountainBicycle} alt="mountain bicycle" />
        <div className="product-info">
          <h3>Mountain Bicycle</h3>
          <p>$1000</p>
        </div>
      </div>
      <div className="bottom">
        <div className="form">
          <button className="decrement">-</button>
          <input type="number" min="1" value="2" placeholder="1" />
          <button className="increment">+</button>
        </div>
        <button className="remove-item">x Remove Item</button>
      </div>
    </>
  );
}
