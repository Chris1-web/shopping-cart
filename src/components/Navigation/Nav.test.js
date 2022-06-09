import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Nav from "./Nav";

describe("renders Navigation Component", () => {
  test("displays navigation tag", () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  test("displays for items in list", () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
    const listContainer = screen.getByRole("list");
    const listItem = screen.getAllByRole("listitem");
    expect(listContainer).toBeInTheDocument();
    expect(listItem.length).toEqual(5);
  });
});
