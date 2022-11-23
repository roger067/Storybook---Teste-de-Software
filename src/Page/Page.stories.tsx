import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Page from "./Page";

export default {
  title: "Example/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page />;

export const Example = Template.bind({});

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText("Finalizar")).toBeDisabled();

  await userEvent.type(canvas.getByLabelText("Nome"), "Rogério", {
    delay: 100,
  });
  await userEvent.click(canvas.getByTestId("select"));
  await userEvent.click(canvas.getByText("Aluno"));
  await userEvent.type(canvas.getByLabelText("E-mail"), "rogerio@puc.com", {
    delay: 100,
  });

  await expect(canvas.getByText("Finalizar")).not.toBeDisabled();
  await userEvent.click(canvas.getByText("Finalizar"));

  await expect(
    canvas.getByText("Cadastro realizado com sucesso")
  ).toBeInTheDocument();
};
