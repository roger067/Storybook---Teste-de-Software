import { useState } from "react";
import Alert from "../Alert/Alert";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Flex from "../Flex/Flex";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Steps, { Step } from "../Step/Step";
import Text from "../Text/Text";
import { COLORS } from "../utils";

type FormKeys = "name" | "role" | "email";

const Page = () => {
  const [selectedStep, setSelectedStep] = useState("register");
  const [registerForm, setRegisterForm] = useState({
    name: {
      value: "",
      errorMessage: "",
    },
    role: {
      value: "",
      errorMessage: "",
    },
    email: {
      value: "",
      errorMessage: "",
    },
  });

  const steps: Step[] = [
    { status: "finished", title: "Passo 1" },
    {
      status: selectedStep === "register" ? "default" : "finished",
      title: "Cadastrar",
    },
    {
      status: selectedStep === "confirm" ? "finished" : "default",
      title: "Confirmação",
    },
  ];

  const itens = [
    { label: "Professor", value: "Professor" },
    { label: "Aluno", value: "Aluno" },
    { label: "Monitor", value: "Monitor" },
  ];

  const handleFieldChange = (value: string, name: FormKeys) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [name]: { value, hasError: false },
    }));
  };

  const getEmptyFields = () => {
    return !!Object.values(registerForm).filter((form) => form.value === "")
      .length;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSelectedStep("confirm");
  };

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      <Steps steps={steps} />
      {selectedStep === "register" && (
        <Card flexDirection="column" mt="24px" style={{ minWidth: "352px" }}>
          <Text
            mb="16px"
            color={COLORS.GREY_700}
            fontSize="20px"
            fontWeight="700"
          >
            Registrar funcionário
          </Text>
          <form onSubmit={onSubmit}>
            <Input
              label="Nome"
              name="name"
              value={registerForm.name.value}
              onChange={(e) => handleFieldChange(e.target.value, "name")}
            />
            <Select
              label="Cargo"
              name="role"
              value={registerForm.role.value}
              onChange={(e) => handleFieldChange(e, "role")}
              itens={itens}
            />
            <Input
              label="E-mail"
              name="email"
              value={registerForm.email.value}
              onChange={(e) => handleFieldChange(e.target.value, "email")}
            />
            <Button style={{ width: "100%" }} disabled={getEmptyFields()}>
              Finalizar
            </Button>
          </form>
        </Card>
      )}
      {selectedStep === "confirm" && (
        <Flex mt="24px" flexDirection="column">
          <Alert state="success" text="Cadastro realizado com sucesso" />
          <Text mt="16px">Nome: {registerForm.name.value}</Text>
          <Text mt="16px">Cargo: {registerForm.role.value}</Text>
          <Text mt="16px">E-mail: {registerForm.email.value}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Page;
