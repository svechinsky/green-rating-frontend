import React from "react";
import styled from "styled-components";
import { Button } from "grommet";

const ClickableIcon = styled(Button)`
  &:hover {
    svg {
      cursor: pointer;
      stroke: #6fffb0;
    }
  }
`;
export default ClickableIcon;
