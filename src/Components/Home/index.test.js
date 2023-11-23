import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./index";

describe("HomePage Component", () => {
  it("renders without errors", () => {
    const { container } = render(<HomePage />);
    expect(container).toBeInTheDocument();
  });
});