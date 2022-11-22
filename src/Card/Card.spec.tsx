import { screen, render } from "@testing-library/react";

import Card from "./Card";

test("should render Card component", () => {
  render(<Card>lorem ipsum</Card>);

  const card = screen.getByText("lorem ipsum");

  expect(card).toBeInTheDocument();
});

test("should render correctly props", () => {
  render(
    <Card
      boxShadow="none"
      backgroundColor="#000"
      color="#fff"
      borderRadius="16px"
    >
      lorem ipsum
    </Card>
  );

  const card = screen.getByText("lorem ipsum");

  expect(card).toHaveStyle(`background-color: #000`);
  expect(card).toHaveStyle(`color: #fff`);
  expect(card).toHaveStyle(`border-radius: 16px`);
  expect(card).toHaveStyle(`box-shadow: none`);
});
