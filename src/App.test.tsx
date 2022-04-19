import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // 1. create / render component
  render(<App />);

  // 2. query element
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  // 2. query element
  const header = screen.getByText("Job Search");
  // 3. check / test
  expect(header).toBeInTheDocument();
});
