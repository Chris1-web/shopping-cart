import { useEffect, useState } from "react";
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
  // const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    setProducts([...productsImages]);
  }, []);

  const addProductToCart = (product) => {
    console.log(product);
  };

  const changeQuantity = (clickedProduct, newQuantity) => {
    if (!newQuantity || newQuantity === 0) return;
    // get the index of the chosen product
    const chosenProductIndex = products
      .map((product) => product.name)
      .indexOf(clickedProduct.name);
    // replace current quantity with newly written quanitity
    products[chosenProductIndex].quantity = Number(newQuantity);
  };

  return (
    <main className="products">
      {products.map((product, index) => (
        <ProductCard
          product={product}
          changeQuantity={changeQuantity}
          addProductToCart={addProductToCart}
          key={index}
        />
      ))}
    </main>
  );
}
