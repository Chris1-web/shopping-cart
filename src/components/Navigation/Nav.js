import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cartLogo from "../images/cart-logo.png";
import Cart from "../cartPage/Cart";

const Nav = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="page logo" className="logo" />
            </Link>
          </li>
          <div className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="shop">
                <div className="cart" onClick={toggleCart}>
                  <img src={cartLogo} alt="page logo" className="cart-logo" />
                  <p className="cart-product-number">1</p>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      {showCart && <Cart toggleCart={toggleCart} />}
    </>
  );
};

export default Nav;
