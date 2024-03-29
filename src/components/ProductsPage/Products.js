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

const calculateCartQuantity = (products) => {
  return products.reduce(
    (prevProduct, currProduct) => prevProduct + currProduct.quantity,
    0
  );
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // on component mount, copy products images into products array
  useEffect(() => {
    setProducts([...productsImages]);
  }, []);

  useEffect(() => {
    setCartCount(calculateCartQuantity(cartProducts));
  }, [cartProducts]);

  const addProductToCart = (clickedProduct) => {
    // if product is in cart, get it and edit the product
    // else create new product and add to existing products in cart
    if (cartProducts.includes(clickedProduct)) {
      const editedProduct = cartProducts.map((product) => {
        if (product.name === clickedProduct.name) {
          product.quantity += 1;
          return product;
        }
        return product;
      });
      setCartProducts([...editedProduct]);
    } else {
      setCartProducts((prevCartProduct) => {
        return [...prevCartProduct, clickedProduct];
      });
    }
  };

  const changeQuantity = (clickedProduct, newQuantity) => {
    // edit products is in cart
    const editedProduct = cartProducts.map((product) => {
      if (product.name === clickedProduct.name) {
        product.quantity = +newQuantity;
        return product;
      }
      return product;
    });
    setCartProducts([...editedProduct]);
  };

  const removeProductFromCart = (clickedProduct) => {
    // return the product quanity in products array to 1;
    setProducts(
      products.map((product) => {
        if (product.name === clickedProduct.name) {
          product.quantity = 1;
          return product;
        }
        return product;
      })
    );

    // filter the cart products to return only non removed products
    setCartProducts(
      cartProducts.filter((product) => product.name !== clickedProduct.name)
    );
  };

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <>
      <div className="cart" onClick={toggleCart}>
        <img src={cartLogo} alt="page logo" className="cart-logo" />
        <p className="cart-product-number">{cartCount}</p>
      </div>
      <main className="products">
        {products.map((product, index) => (
          <ProductCard
            product={product}
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
                  <p className="cart-product-number">{cartCount}</p>
                </div>
                <h2>CART OVERVIEW</h2>
                <button className="close" onClick={toggleCart}>
                  X Close
                </button>
              </div>
              {/* displays cards */}
              {cartProducts.map((product, index) => (
                <Cart
                  product={product}
                  changeQuantity={changeQuantity}
                  removeProductFromCart={removeProductFromCart}
                  key={index}
                />
              ))}
              {/* card checkout section styling */}
              <aside className="checkout">
                <div className="checkout-top">
                  <p>Subtotal</p>
                  <p className="total">${calculateCartTotal(cartProducts)}</p>
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
