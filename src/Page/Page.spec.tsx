import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Page from "./Page";

test("should render Page component", () => {
  render(<Page />);

  const page = screen.getByText("Registrar funcionário");

  expect(page).toBeInTheDocument();
});

test("should fill fileds", () => {
  render(<Page />);

  expect(screen.getByText("Finalizar")).toBeDisabled();

  userEvent.type(screen.getByLabelText("Nome"), "Rogério");
  userEvent.click(screen.getByTestId("select"));
  userEvent.click(screen.getByText("Aluno"));
  userEvent.type(screen.getByLabelText("E-mail"), "rogerio@puc.com");

  expect(screen.getByText("Finalizar")).not.toBeDisabled();
  userEvent.click(screen.getByText("Finalizar"));

  expect(
    screen.getByText("Cadastro realizado com sucesso")
  ).toBeInTheDocument();
});
