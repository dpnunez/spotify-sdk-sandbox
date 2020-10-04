import styled from "styled-components";

import { space, typography } from "styled-system";

const Button = styled.button`
  font-size: 20px;
  color: white;
  background-color: ${({ theme }) => theme.palette.primary};
  padding: 0.5em 1em;
  border-radius: 1em;
  pointer-events: all;
  transition: all 0.5s ease;

  &:hover {
    filter: brightness(1.28);
  }
  ${typography}
  ${space}
`;

export { Button };
