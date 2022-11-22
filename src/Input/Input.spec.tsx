import { screen, render } from "@testing-library/react";

import { COLORS } from "../utils";
import Input from "./Input";

test("should render Input component", () => {
  render(<Input name="email" label="E-mail" />);

  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();
});

test("should render error message", () => {
  render(<Input name="email" label="E-mail" errorMessage="error" />);

  const input = screen.getByRole("textbox");

  const errorMessage = screen.getByText("error");

  expect(errorMessage).toBeDefined();

  expect(input).toHaveStyle(`border: 1px solid ${COLORS.RED_500}`);
});
