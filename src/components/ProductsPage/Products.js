import { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import cartLogo from "../images/cart-logo.png";
import Cart from "../cartPage/Cart";
import productsImages from "../productsImages";

// calculate Total function
const calculateCartTotal = (products) => {
  return products.reduce(
    (prevProduct, currProduct) =>
      prevProduct + currProduct.quantity * currProduct.price,
    0
  );
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotalCost, setCartTotalCost] = useState(0);

  // on component mount, copy products images into products array
  useEffect(() => {
    setProducts([...productsImages]);
  }, []);

  //if cart product changes update, total cost
  useEffect(() => {
    const cartTotalCalcutation = calculateCartTotal(cartProducts);
    setCartTotalCost(cartTotalCalcutation);
  }, [cartProducts]);

  const addProductToCart = (product) => {
    // create total cost property in product
    setCartProducts((prevCartProduct) => {
      return [...prevCartProduct, product];
    });
  };

  const changeQuantity = (clickedProduct, newQuantity) => {
    const editedProduct = products.map((product) => {
      if (product.name === clickedProduct.name) {
        product.quantity = +newQuantity;
        return product;
      }
      return product;
    });
    setProducts([...editedProduct]);
  };

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <>
      <div className="cart" onClick={toggleCart}>
        <img src={cartLogo} alt="page logo" className="cart-logo" />
        <p className="cart-product-number">1</p>
      </div>
      <main className="products">
        {products.map((product, index) => (
          <ProductCard
            product={product}
            changeQuantity={changeQuantity}
            addProductToCart={addProductToCart}
            key={index}
          />
        ))}
        {showCart && (
          <>
            {/* section covers for styling */}
            <div className="overlay-background" onClick={toggleCart}></div>
            <section className="cart-section">
              <div className="cart-overview-top">
                <div className="cart">
                  <img src={cartLogo} alt="cart logo" className="cart-logo" />
                  <p className="cart-product-number">1</p>
                </div>
                <h2>CART OVERVIEW</h2>
                <button className="close" onClick={toggleCart}>
                  X Close
                </button>
              </div>
              {/* displays cards */}
              {cartProducts.map((product, index) => (
                <Cart product={product} key={index} />
              ))}
              {/* card checkout section */}
              <aside className="checkout">
                <div className="checkout-top">
                  <p>Subtotal</p>
                  <p className="total">${cartTotalCost}</p>
                </div>
                <button>Checkout</button>
              </aside>
            </section>
          </>
        )}
      </main>
    </>
  );
}
