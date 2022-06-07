import { Link } from "react-router-dom";
import heroImage from "../images/mountain-bicycle.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main
      className="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.6)) , url(${heroImage})`,
      }}
    >
      <div>
        <h1>KING OF THE ROAD</h1>
        <Link to="shop">SHOP NOW</Link>
      </div>
    </main>
  );
};

export default Home;
