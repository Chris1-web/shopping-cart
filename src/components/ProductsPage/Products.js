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
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    setProducts([...productsImages]);
  }, []);

  const addProductToCart = (product) => {
    console.log(product);
    console.log(productsImages);
  };

  const changeQuantity = (clickedProduct, newQuantity) => {
    if (!newQuantity || newQuantity === 0) return;
    const chosenProduct = products.map((product) => {
      if (product.name === clickedProduct.name) {
        product.quantity = +newQuantity;
        return product;
      }
      return product;
    });
    console.log(clickedProduct);
    console.log(chosenProduct);
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
        {showCart && <Cart toggleCart={toggleCart} />}
      </main>
    </>
  );
}
