import { CheckCircle, XCircle } from "@styled-icons/bootstrap";
import styled from "styled-components";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";

import { COLORS } from "../utils";

interface AlertProps {
  text: string;
  state: "success" | "danger";
}

const Alert: React.FC<AlertProps> = ({ text, state }) => (
  <AlertTag state={state} alignItems="center" role="alert">
    {state === "success" ? (
      <CheckCircle
        color={COLORS.GREEN_700}
        size={20}
        data-testid="check-circle"
      />
    ) : (
      <XCircle color={COLORS.RED_500} size={20} data-testid="error-circle" />
    )}
    <Text
      ml="8px"
      color={state === "success" ? COLORS.GREEN_700 : COLORS.RED_500}
    >
      {text}
    </Text>
  </AlertTag>
);

const AlertTag = styled(Flex)<{ state: "success" | "danger" }>`
  border-radius: 8px;
  background: ${({ state }) =>
    state === "success" ? COLORS.GREEN_300 : COLORS.RED_300};
  padding: 8px 16px;
  max-width: 325px;
`;

export default Alert;
