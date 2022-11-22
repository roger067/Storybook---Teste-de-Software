import { screen, render, fireEvent } from "@testing-library/react";

import { COLORS } from "../utils";
import Select from "./Select";

const itens = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
];

test("should render Select component", () => {
  render(
    <Select
      name="email"
      label="E-mail"
      itens={itens}
      value="1"
      onChange={() => jest.fn()}
    />
  );

  const select = screen.getByRole("button");

  expect(select).toBeInTheDocument();
});

test("should render error message", () => {
  render(
    <Select
      name="email"
      label="E-mail"
      errorMessage="error"
      itens={itens}
      value=""
      onChange={() => jest.fn()}
    />
  );

  const select = screen.getByRole("button");

  const errorMessage = screen.getByText("error");

  expect(errorMessage).toBeDefined();

  expect(select).toHaveStyle(`border: 1px solid ${COLORS.RED_500}`);
});

test("should call onChange", () => {
  const onChange = jest.fn();

  render(
    <Select
      name="email"
      label="E-mail"
      errorMessage="error"
      itens={itens}
      value="1"
      onChange={onChange}
    />
  );

  const item = screen.getAllByRole("option")[0];

  fireEvent.click(item);

  expect(onChange).toHaveBeenCalledTimes(1);
});

test("should open dropdown", () => {
  render(
    <Select
      name="email"
      label="E-mail"
      errorMessage="error"
      itens={itens}
      value=""
      onChange={() => jest.fn()}
    />
  );

  const select = screen.getByRole("button");

  const item = screen.queryAllByRole("option")[0];

  expect(item).not.toBeDefined();

  fireEvent.click(select);

  expect(screen.getAllByRole("option")[0]).toBeInTheDocument();
});

test("should call onClick when click outside select", () => {
  render(
    <>
      <span>Texto que eu vou clicar fora</span>
      <Select
        name="email"
        label="E-mail"
        errorMessage="error"
        itens={itens}
        value="1"
        onChange={jest.fn()}
      />
    </>
  );

  const outsideItem = screen.getByText("Texto que eu vou clicar fora");

  const item = screen.getAllByRole("option")[0];

  expect(item).toBeDefined();

  fireEvent.click(outsideItem);

  expect(screen.queryAllByRole("option")[0]).not.toBeDefined();
});
