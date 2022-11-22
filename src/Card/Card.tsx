import styled from "styled-components";

import Flex from "../Flex/Flex";
import { COLORS } from "../utils";

interface CardProps {
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
}

const Card = styled(Flex)<CardProps>`
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "0px 1.4px 2.3px rgb(0 0 0 / 2%)"};
  background-color: ${({ backgroundColor }) => backgroundColor || COLORS.WHITE};
  padding: ${({ padding }) => padding?.toString() || "8px"};
`;

export default Card;
