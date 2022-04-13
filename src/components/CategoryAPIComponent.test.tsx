import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CatergoryAPIComponent from "./CategoryAPIComponent";

test("Category API Main header in document", () => {
  render(<CatergoryAPIComponent />);
  const mainHeaderElement = screen.getByTestId("categoryAPIMainHeader");
  expect(mainHeaderElement).toBeInTheDocument();
});

test("Category select formin document", () => {
  render(<CatergoryAPIComponent />);
  const categorySelectFormElement = screen.getByTestId("categorySelectForm");
  expect(categorySelectFormElement).toBeInTheDocument();
});

test("Select options in document", () => {
  render(<CatergoryAPIComponent />);
  const chooseOneSelectElement = screen.getByText("Choose one");
  const entertainmentSelectElement = screen.getByText("Entertainment");
  const healthSelectElement = screen.getByText("Health");
  const scienceSelectElement = screen.getByText("Science");
  const sportsSelectElement = screen.getByText("Sports");
  const technologySelectElement = screen.getByText("Technology");
  expect(chooseOneSelectElement).toBeInTheDocument();
  expect(entertainmentSelectElement).toBeInTheDocument();
  expect(healthSelectElement).toBeInTheDocument();
  expect(scienceSelectElement).toBeInTheDocument();
  expect(sportsSelectElement).toBeInTheDocument();
  expect(technologySelectElement).toBeInTheDocument();
});
