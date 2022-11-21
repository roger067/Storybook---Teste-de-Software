import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "../Alert";

export default {
  title: "Example/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  state: "success",
  text: "Alert",
};

export const Danger = Template.bind({});
Danger.args = {
  state: "danger",
  text: "Alert",
};
