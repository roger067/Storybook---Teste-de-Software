import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";

export default {
  title: "Example/Select",
  component: Select,
  args: {
    itens: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState("");

  return (
    <Select
      {...args}
      value={value || args.value}
      onChange={(e) => setValue(e)}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  label: "Select input",
  name: "name",
  errorMessage: "",
  value: "",
};
