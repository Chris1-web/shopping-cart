import cartLogo from "../images/cart-logo.png";

export default function Cart({ toggleCart }) {
  const closeCart = () => {
    toggleCart();
  };
  return (
    <>
      <div className="overlay-background" onClick={closeCart}></div>
      <section className="cart-section">
        <div className="cart-overview-top">
          <div className="cart">
            <img src={cartLogo} alt="cart logo" className="cart-logo" />
            <p className="cart-product-number">1</p>
          </div>
          <h2>CART OVERVIEW</h2>
          <button className="close" onClick={closeCart}>
            X Close
          </button>
        </div>
        <div className="cart-overview-bottom">
          <img />
          <h3></h3>
        </div>
      </section>
    </>
  );
}
