import styled from "styled-components";

import Flex from "../Flex/Flex";
import { COLORS } from "../utils";

interface CardProps {
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  color?: string;
}

const Card = styled(Flex)<CardProps>`
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  box-shadow: ${({ boxShadow }) => boxShadow || "0 0 5px #ccc"};
  background-color: ${({ backgroundColor }) => backgroundColor || COLORS.WHITE};
  padding: ${({ padding }) => padding?.toString() || "16px"};
  color: ${({ color }) => color || COLORS.GREY_700};
`;

export default Card;
