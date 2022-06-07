import "./Products.css";
import ProductCard from "./PruductCard";
import cheapRoadBicycle from "../images/cheap-Road-Bike.jpg";
import KidsBicycle from "../images/Kids-Bicycle.jpg";
import MarketBicycle from "../images/Market-Bicycle.jpg";
import RenaissanceBicycle from "../images/Renaissance-Street-Bicycle.jpg";
import SafeRoadBicycle from "../images/safe-road-bicycle.jpg";
import TouristBicycle from "../images/Tourist-Bicycle.jpg";
import TwinBicycle from "../images/Twin-Bicycle.jpg";
import MountainBicycle from "../images/mountain-bicycle.jpg";
import AdultChoiceBicycle from "../images/AdultChoice.jpg";

const productsImages = [
  { name: "Mountain Bicycle", src: MountainBicycle, price: 1000 },
  { name: "Cheap Road Bicycle", src: cheapRoadBicycle, price: 150 },
  { name: "Safe Road Bicycle", src: SafeRoadBicycle, price: 200 },
  { name: "Renaissance Bicycle", src: RenaissanceBicycle, price: 1000 },
  { name: "Kid's Bicycle", src: KidsBicycle, price: 200 },
  { name: "Adult Choice Bicycle", src: AdultChoiceBicycle, price: 500 },
  { name: "Twin Bicycle", src: TwinBicycle, price: 5000 },
  { name: "Tourist Bicycle", src: TouristBicycle, price: 300 },
  { name: "Market Bicycle", src: MarketBicycle, price: 500 },
];

const Products = () => {
  return (
    <div className="products">
      <ul>
        {productsImages.map((product, index) => (
          <ProductCard index={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
