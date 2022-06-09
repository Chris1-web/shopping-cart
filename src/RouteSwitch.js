import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/HomePage/Home";
import Products from "./components/ProductsPage/Products";
import About from "./components/AboutPage/About";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
