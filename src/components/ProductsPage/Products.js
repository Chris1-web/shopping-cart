import { useEffect, useState } from "react";
import Cart from "../cartPage/Cart";
import "./Products.css";
import ProductCard from "./ProductCard";
import cheapRoadBicycle from "../images/cheap-Road-Bike.jpg";
import KidsBicycle from "../images/Kids-Bicycle.jpg";
import MarketBicycle from "../images/Market-Bicycle.jpg";
import RenaissanceBicycle from "../images/Renaissance-Street-Bicycle.jpg";
import SafeRoadBicycle from "../images/safe-road-bicycle.jpg";
import TouristBicycle from "../images/Tourist-Bicycle.jpg";
import TwinBicycle from "../images/Twin-Bicycle.jpg";
import MountainBicycle from "../images/mountainBike.jpg";
import AdultChoiceBicycle from "../images/AdultChoice.jpg";
import cartLogo from "../images/cart-logo.png";

const productsImages = [
  {
    name: "Mountain Bicycle",
    src: MountainBicycle,
    price: 1000,
    quantity: 1,
  },
  {
    name: "Safe Road Bicycle",
    src: SafeRoadBicycle,
    price: 200,
    quantity: 1,
  },
  {
    name: "Renaissance Bicycle",
    src: RenaissanceBicycle,
    price: 1000,
    quantity: 1,
  },
  {
    name: "Kid's Bicycle",
    src: KidsBicycle,
    price: 200,
    quantity: 1,
  },
  {
    name: "Adult Choice Bicycle",
    src: AdultChoiceBicycle,
    price: 500,
    quantity: 1,
  },
  {
    name: "Twin Bicycle",
    src: TwinBicycle,
    price: 5000,
    quantity: 1,
  },
  {
    name: "Tourist Bicycle",
    src: TouristBicycle,
    price: 300,
    quantity: 1,
  },
  {
    name: "Cheap Road Bicycle",
    src: cheapRoadBicycle,
    price: 150,
    quantity: 1,
  },
  {
    name: "Market Bicycle",
    src: MarketBicycle,
    price: 500,
    quantity: 1,
  },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setProducts([...productsImages]);
  }, []);

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
    console.log(calculateCartTotal(products));
  };

  // calculate Total function
  const calculateCartTotal = (products) => {
    return products.reduce(
      (prevProduct, currProduct) =>
        prevProduct + currProduct.quantity * currProduct.price,
      0
    );
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
                  <p className="total">$1400</p>
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
