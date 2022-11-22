import { useState } from "react";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Flex from "../Flex/Flex";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Steps, { Step } from "../Step/Step";
import Text from "../Text/Text";

const Page = () => {
  const [value, setValue] = useState("");

  const steps: Step[] = [
    { status: "finished", title: "Passo 1" },
    { status: "default", title: "Passo 2" },
    { status: "default", title: "Passo 3" },
  ];

  const itens = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
  ];

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      <Steps steps={steps} />
      <Card flexDirection="column" mt="24px" style={{ minWidth: "352px" }}>
        <Text mb="16px">Lorem ipsum</Text>
        <Input label="Campo 1" name="a" />
        <Select
          label="Campo 2"
          name="b"
          value={value}
          onChange={(e) => setValue(e)}
          itens={itens}
        />
        <Input label="Campo 3" name="c" />
        <Button>Avançar</Button>
      </Card>
    </Flex>
  );
};

export default Page;
