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
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setProducts([...productsImages]);
  }, []);

  const addQuantity = (clickedProduct, addedQuantity) => {
    // get chosen product by name out of all products
    const chosenProduct = products.filter(
      (product) => product.name === clickedProduct.name
    )[0];
    // get the index of the chosen product
    const chosenProductIndex = products
      .map((product) => product.name)
      .indexOf(chosenProduct.name);
    //  subtract quantity from chosen product
    products[chosenProductIndex].quantity += addedQuantity;
    setProducts([...products]);
  };

  const reduceQuantity = (clickedProduct, removedQuantity) => {
    const chosenProduct = products.filter(
      (product) => product.name === clickedProduct.name
    )[0];
    // get the index of the chosen product
    const chosenProductIndex = products
      .map((product) => product.name)
      .indexOf(chosenProduct.name);
    //  subtract quantity from chosen product
    if (products[chosenProductIndex].quantity >= 1) {
      products[chosenProductIndex].quantity -= removedQuantity;
    }
    setProducts([...products]);
  };

  return (
    <main className="products">
      {products.map((product, index) => (
        <ProductCard
          product={product}
          addQuantity={addQuantity}
          reduceQuantity={reduceQuantity}
          key={index}
        />
      ))}
    </main>
  );
}
