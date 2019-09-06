import React from "react";
import { Box, Heading } from "grommet";

import Container from "../../common/Container";
class NoNode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Heading
          level={1}
          size="large"
          margin={{ top: "medium" }}
          textAlign="center"
          alignSelf="center"
        >
          No node found, please connect to one
        </Heading>
      </Container>
    );
  }
}

export default NoNode;
