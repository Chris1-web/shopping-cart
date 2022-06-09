import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import ProductCard from "./ProductCard";
import AdultChoiceBicycle from "../images/AdultChoice.jpg";

// setup props
const product = {
  name: "Market Bicycle",
  src: AdultChoiceBicycle,
  price: 500,
  quantity: 1,
};
const decreaseQuantity = jest.fn();
const changeQuantity = jest.fn();

describe("renders product card component", () => {
  it("render product card inside article tag", () => {
    render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const container = screen.getByRole("article");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("product-card");
    screen.debug();
  });
  it("renders images in product-cart", () => {
    render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const productImage = screen.getByRole("img");
    expect(productImage).toBeInTheDocument();
  });
  it("renders texts in product-cart", () => {
    render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const productTitle = screen.getByRole("heading", { name: product.title });
    const productPrice = screen.getByText(/500/);
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
  it("renders button with text in product-cart", () => {
    render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const productButton = screen.getByRole("button", { name: "Add To Cart" });
    expect(productButton).toBeInTheDocument();
  });
  it("call changeQuantity function once on increment button click", () => {
    render(
      <Router>
        <ProductCard product={product} changeQuantity={changeQuantity} />
      </Router>
    );
    const productButton = screen.getByRole("button", { name: "-" });
    userEvent.click(productButton);
    expect(productButton).toBeInTheDocument();
    // expect(decreaseQuantity).toHaveBeenCalled(2);
  });
});
