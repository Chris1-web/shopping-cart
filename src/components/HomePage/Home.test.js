import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import heroImage from "../images/mountain-bicycle.jpg";

describe("renders Home Component", () => {
  test("should render hero test", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const mainContainer = screen.getByRole("main");
    const heroText = screen.getByText(/King of the road/i);
    expect(mainContainer).toHaveClass("home");
    expect(heroText).toBeInTheDocument();
  });
  test("should display shop link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const linkButton = screen.getByRole("link");
    expect(linkButton).toBeInTheDocument();
  });
  test("should have link button display text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const linkText = screen.getByText(/Shop now/i);
    expect(linkText).toBeInTheDocument();
  });
  test("should have background images in home page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const mainContainer = screen.getByRole("main");
    expect(mainContainer).toHaveStyle(
      ` backgroundImage: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.6)) , url(${heroImage})`
    );
  });
});
