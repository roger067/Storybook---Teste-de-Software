import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    controls: {
      exclude: ["theme", "as", "forwardedAs"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary",
  rounded: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  variant: "secondary",
  rounded: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  variant: "primary",
  rounded: false,
  disabled: true,
};
