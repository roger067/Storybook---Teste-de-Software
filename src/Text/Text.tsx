import styled from "styled-components";

import {
  space,
  typography,
  color,
  TypographyProps,
  SpaceProps,
  ColorProps,
} from "styled-system";

const Text = styled.span<TypographyProps & SpaceProps & ColorProps>`
  ${space};
  ${typography};
  ${color};
`;

export default Text;
