import { screen, render, fireEvent } from "@testing-library/react";

import { COLORS } from "../utils";
import Button from "../Button";

test("should render button component", () => {
  render(<Button variant="primary">Button</Button>);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should render correctly text", () => {
  render(<Button variant="primary">Texto</Button>);

  const button = screen.getByText("Texto");

  expect(button).toBeInTheDocument();
});

test("should render primary button", () => {
  render(<Button variant="primary">Texto</Button>);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`background-color: ${COLORS.GREEN_600}`);
  expect(button).toHaveStyle(`color: ${COLORS.WHITE}`);
});

test("should render secondary button", () => {
  render(<Button variant="secondary">Texto</Button>);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`background-color: ${COLORS.WHITE}`);
  expect(button).toHaveStyle(`color: ${COLORS.GREEN_600}`);
});

test("should render disabled button", () => {
  const mockedOnClick = jest.fn();

  render(
    <Button variant="secondary" disabled onClick={mockedOnClick}>
      Texto
    </Button>
  );

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`background-color: ${COLORS.GREY_300}`);
  expect(button).toHaveStyle(`color: ${COLORS.GREY_600}`);

  fireEvent.click(button);
  expect(mockedOnClick).toHaveBeenCalledTimes(0);
});

test("should render primary button if variant was undefined", () => {
  render(<Button>Texto</Button>);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`background-color: ${COLORS.GREEN_600}`);
  expect(button).toHaveStyle(`color: ${COLORS.WHITE}`);
});

test("should test rounded button", () => {
  render(<Button rounded>Texto</Button>);

  const button = screen.getByRole("button");

  expect(button).toHaveStyle(`border-radius: 16px`);
});
