import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../Footer";

describe("Footer Component", () => {
  it("should render the Footer component with expected elements and data", () => {
    const { getByText, getByTestId } = render(<Footer />);

    const amaliHeading = getByText("Amali");
    expect(amaliHeading).toBeInTheDocument();

    const mailLink = getByTestId("mail-link");
    const twitterLink = getByTestId("twitter-link");
    const linkedinLink = getByTestId("linkedin-link");
    expect(mailLink).toHaveAttribute("href", "mailto:angethherjok@gmail.com");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com");

    const homeLink = getByText("Home");
    const aboutUsLink = getByText("About Us");
    const contactUsLink = getByText("Contact Us");
    expect(homeLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();

    const phoneInfo = getByText("+254 714 947 438");
    const locationInfo = getByText("Nairobi, Kenya");
    expect(phoneInfo).toBeInTheDocument();
    expect(locationInfo).toBeInTheDocument();

  });
});