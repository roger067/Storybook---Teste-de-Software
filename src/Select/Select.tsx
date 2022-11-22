import { ChevronDown } from "@styled-icons/bootstrap";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Text from "../Text/Text";
import { COLORS } from "../utils";

interface SelectProps {
  label: string;
  value: string;
  name: string;
  errorMessage?: string;
  onChange: (value: string) => void;
  itens: {
    label: string;
    value: string;
  }[];
}

const Select: React.FC<SelectProps> = ({
  label,
  errorMessage,
  onChange,
  value,
  name,
  itens,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(!!value);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickItem = (value: string) => {
    onChange(value);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const selectedValue = itens.find((item) => item.value === value)?.label;

  return (
    <SelectGroup ref={ref} hasError={!!errorMessage}>
      <label className={isDropdownOpen || !!value ? "selected" : ""}>
        {label}
      </label>
      <input type="hidden" value={value} name={name} id={name} />
      <SelectTag
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        data-testid="select"
        hasError={!!errorMessage}
        type="button"
        className={isDropdownOpen ? "selected" : ""}
      >
        <Text fontSize="14px" color={COLORS.GREY_600}>
          {selectedValue}
        </Text>
        <ChevronDown size={16} color={COLORS.GREEN_500} />
      </SelectTag>
      <small className={errorMessage ? "error" : ""}>{errorMessage}</small>
      {isDropdownOpen && (
        <Dropdown>
          {itens.map((item) => (
            <Item
              key={item.value}
              onClick={() => handleClickItem(item.value)}
              role="option"
            >
              {item.label}
            </Item>
          ))}
        </Dropdown>
      )}
    </SelectGroup>
  );
};

const SelectGroup = styled.div<{ hasError?: boolean }>`
  position: relative;

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

const SelectTag = styled.button<{ hasError?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 39px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: border 300ms;

  padding: 12px;
  border-radius: 4px;
  border: ${({ hasError }) =>
    hasError ? `1px solid ${COLORS.RED_500}` : `1px solid ${COLORS.GREY_400}`};

  &:focus,
  &:active {
    border: ${({ hasError }) =>
      hasError
        ? `1px solid ${COLORS.RED_700}`
        : `1px solid ${COLORS.GREEN_500}`};
  }

  svg {
    transition: transform 300ms;
  }
  &.selected {
    svg {
      transform: rotate(180deg);
    }
  }
`;

const Dropdown = styled.ul`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  background: ${COLORS.WHITE};
  padding: 16px 8px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 2%) 0px 1.4px 2.3px, rgb(0 0 0 / 4%) 0px 4px 6.3px,
    rgb(0 0 0 / 5%) 0px 9.6px 15.1px, rgb(0 0 0 / 7%) 0px 32px 50px;
  max-height: 150px;
  list-style-type: none;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.WHITE};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.GREY_500};
    border-radius: 8px;
  }
`;

const Item = styled.li`
  padding: 12px 8px;
  margin: 0;
  cursor: pointer;
  transition: background 200ms;
  &:hover {
    background: ${COLORS.GREY_400};
    border-radius: 8px;
  }
`;

export default Select;
