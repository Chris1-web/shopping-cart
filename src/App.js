import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Nav";

function App() {
  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
