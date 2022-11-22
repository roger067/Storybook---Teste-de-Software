import { screen, render } from "@testing-library/react";

import { COLORS } from "../utils";
import Card from "./Card";

test("should render Card component", () => {
  render(<Card>lorem ipsum</Card>);

  const card = screen.getByText("lorem ipsum");

  expect(card).toBeInTheDocument();
});
