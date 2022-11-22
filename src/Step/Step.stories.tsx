import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Step from "./Step";

export default {
  title: "Example/Step",
  component: Step,
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = (args) => <Step {...args} />;

export const Example = Template.bind({});
Example.args = {
  steps: [
    { status: "finished", title: "Passo 1" },
    { status: "default", title: "Passo 2" },
    { status: "default", title: "Passo 3" },
  ],
};
