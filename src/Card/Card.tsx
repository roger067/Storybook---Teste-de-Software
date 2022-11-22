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
    boxShadow || "0px 3px 6px rgba(0, 0, 0, 0.349)"};
  background-color: ${({ backgroundColor }) => backgroundColor || COLORS.WHITE};
  padding: ${({ padding }) => padding?.toString() || "16px"};
`;

export default Card;
