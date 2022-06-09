import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cartLogo from "../images/cart-logo.png";

const Nav = () => {
  return (
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
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">
              <img src={cartLogo} alt="page logo" className="cart-logo" />
              <p className="cart-product-number">1</p>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
