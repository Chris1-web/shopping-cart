import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Nav";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <Nav />
      <Outlet context={showCart} />
    </div>
  );
}
