import Cart from "./Cart";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import MountainBicycle from "../images/mountainBike.jpg";

// dummy contents
const product = {
  name: "Mountain Bicycle",
  src: MountainBicycle,
  price: 1000,
  quantity: 1,
};

const changeQuantity = jest.fn();

describe("renders Cart compnenet", () => {
  test("render image and name", () => {
    render(
      <MemoryRouter>
        <Cart product={product} />
      </MemoryRouter>
    );
    const image = screen.getByAltText(product.name);
    const productName = screen.getByText(product.name);
    expect(image).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
  });
  //   test("calls change quantity function", () => {
  //     render(
  //       <MemoryRouter>
  //         <Cart product={product} changeQuantity={changeQuantity} />
  //       </MemoryRouter>
  //     );
  //     const image = screen.getByAltText(product.name);
  //     const productName = screen.getByText(product.name);
  //     // expect(image).toBeInTheDocument();
  //     // expect(productName).toBeInTheDocument();
  //   });
});
