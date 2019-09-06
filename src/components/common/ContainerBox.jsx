/* eslint-disable */
import React from "react";
import { Box } from "grommet";

export default class ContainerBox extends React.Component {
  render() {
    return (
      <Box
        direction="column"
        pad="small"
        elevation="medium"
        border={{ color: "brand", size: "xsmall" }}
        basis={this.props.size? this.props.size: "large"}
        margin="medium"
      >
        {this.props.children}
      </Box>
    );
  }
}
