import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: { type: "color" } },
    color: { control: { type: "color" } },
  },
  parameters: {
    controls: {
      exclude: ["theme", "as", "forwardedAs", "gap"],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>Teste</Card>
);

export const Example = Template.bind({});
Example.args = {
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: "8px",
  boxShadow: "0 0 5px #ccc",
};
