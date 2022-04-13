import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import APIComponent from "./APIComponent";

test("Main header in document", () => {
  render(<APIComponent />);
  const mainHeaderElement = screen.getByTestId("mainHeader");
  expect(mainHeaderElement).toBeInTheDocument();
});

test("Main header in document", () => {
  render(<APIComponent />);
  const mainFormElement = screen.getByTestId("mainForm");
  expect(mainFormElement).toBeInTheDocument();
});

test("Form label in document", () => {
  render(<APIComponent />);
  const formLabelElement = screen.getByTestId("formLabel");
  expect(formLabelElement).toBeInTheDocument();
});

test("Submit button in document", () => {
  render(<APIComponent />);
  const formSubmitButtonElement = screen.getByTestId("submitButton");
  expect(formSubmitButtonElement).toBeInTheDocument();
});

test("News category link in document", () => {
  render(<APIComponent />);
  const newsCategoryLinkElement = screen.getByText(
    "Click here to select news by news category"
  );
  expect(newsCategoryLinkElement).toBeInTheDocument();
});
