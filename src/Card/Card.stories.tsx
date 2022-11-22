import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card>Teste</Card>;

export const Example = Template.bind({});
Example.args = {};
