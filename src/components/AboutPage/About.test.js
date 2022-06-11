import About from "./About";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("renders about compnenet", () => {
  test("render about us heading", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading");
    const headingText = screen.getByText(/About Us/);
    expect(heading).toBeInTheDocument();
    expect(headingText).toBeInTheDocument();
  });
  test("have lorem text", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const paragraphText = screen.getByText(/Lorem/);
    expect(paragraphText).toBeInTheDocument();
  });
});
