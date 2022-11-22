import styled, { css } from "styled-components";
import { COLORS } from "../utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  rounded?: boolean;
}

const primaryCss = css`
  background-color: ${COLORS.GREEN_600};
  color: ${COLORS.WHITE};
  border: none;

  &:hover {
    background-color: ${COLORS.GREEN_700};
  }
`;

const secondaryCss = css`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.GREEN_600};
  border: 1px solid ${COLORS.GREEN_600};

  &:hover {
    background-color: ${COLORS.GREEN_700};
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.GREEN_700};
  }
`;

const buttonStyle = {
  primary: primaryCss,
  secondary: secondaryCss,
};

const Button = styled.button<ButtonProps>`
  ${({ variant }) => buttonStyle[variant || "primary"]};
  border-radius: ${({ rounded }) => (rounded ? "16px" : "4px")};
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 250ms;

  &:disabled {
    background-color: ${COLORS.GREY_300};
    color: ${COLORS.GREY_600};
    cursor: not-allowed;
    border: none;
  }
`;

export default Button;
