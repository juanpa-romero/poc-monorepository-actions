import React from "react";
import { render, screen } from "@testing-library/react";

// Basic test that works with React 19
describe("Basic Test", () => {
  it("should work with React Testing Library", () => {
    render(<div>Hello World</div>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
