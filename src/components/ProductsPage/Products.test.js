import { render } from "@testing-library/react";
import Products from "../ProductsPage/Products";

describe("App component", () => {
  it("renders products page", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<Products />);
    expect(container).toMatchSnapshot();
  });
});
