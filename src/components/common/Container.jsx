import React from "react";
import { Box, Heading } from "grommet";

const Container = props => (
  <Box width="100%" align="center" direction="column">
    <Box
      align="center"
      pad="medium"
      height="xxsmall"
      background="brand"
      direction="row"
      width="100%"
    >
      <Heading level={3}>Green Rating</Heading>
    </Box>
    <Box direction="column" width="large">
      {props.children}
    </Box>
  </Box>
);

export default Container;
