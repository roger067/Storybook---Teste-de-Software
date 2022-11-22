import { InputHTMLAttributes } from "react";
import styled from "styled-components";

import { COLORS } from "../utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  errorMessage,
  ...props
}) => {
  return (
    <InputGroup hasError={!!errorMessage}>
      <label htmlFor={name}>{label}</label>
      <input {...props} id={name} name={name} />
      <small>{errorMessage}</small>
    </InputGroup>
  );
};

const InputGroup = styled.div<{ hasError?: boolean }>`
  width: 100%;
  position: relative;
  margin-bottom: 24px;

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    font-size: 14px;
    color: ${COLORS.GREY_600};
    border: ${({ hasError }) =>
      hasError
        ? `1px solid ${COLORS.RED_500}`
        : `1px solid ${COLORS.GREY_400}`};
    border-radius: 4px;
    outline: none;
    background: transparent;
    transition: all 250ms;

    &:focus,
    &:active {
      border: ${({ hasError }) =>
        hasError
          ? `1px solid ${COLORS.RED_700}`
          : `1px solid ${COLORS.GREEN_500}`};
    }
  }

  label {
    display: block;
    font-size: 12px;
    color: ${COLORS.GREY_700};
    margin-bottom: 8px;
  }

  small {
    opacity: ${({ hasError }) => (hasError ? "1" : "0")};
    position: absolute;
    left: 0;
    bottom: -20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: ${COLORS.RED_500};
    transition: opacity 300ms;
  }
`;

export default Input;
