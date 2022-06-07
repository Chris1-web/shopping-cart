import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cartLogo from "../images/cart-logo.png";

const Nav = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <img src={logo} alt="page logo" className="logo" />
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
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
