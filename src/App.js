import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Nav";

export default function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
