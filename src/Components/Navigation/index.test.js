import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "../Navigation";

test("renders Navigation component", () => {
  const { getByText } = render(<Navigation />);
  const homeLink = getByText("Home");
  const aboutUsLink = getByText("AboutUs");
  expect(homeLink).toBeInTheDocument();
  expect(aboutUsLink).toBeInTheDocument();});
  
test("toggles menu when hamburger icon is clicked", () => {
  const { getByTestId, queryByTestId } = render(<Navigation />);
  const inactiveNavLinks = queryByTestId("nav-links");
  expect(inactiveNavLinks).toBeInTheDocument();  
  
  const hamburgerIcon = getByTestId("hamburger-icon");
  fireEvent.click(hamburgerIcon);  const activeNavLinks = queryByTestId("nav-links");
  expect(activeNavLinks).toHaveClass("active");  fireEvent.click(hamburgerIcon);  expect(inactiveNavLinks).not.toHaveClass("active");
});