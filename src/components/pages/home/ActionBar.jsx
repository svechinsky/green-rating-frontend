import React, { useState } from "react";
import {
  Box,
  Text,
  Layer,
  Button,
  TextInput,
  Heading,
  Tabs,
  Tab
} from "grommet";
import { Help, User, AddCircle, Checkmark, Send, Close } from "grommet-icons";
import Container from "../../common/Container";

class ActionBar extends React.Component {
  state = {
    showLayer: false,
    layerSubmit: null,
    layerInput: null,
    layerOnClick: null,
    inputVal: ""
  };
  render() {
    const { signEntity, addEntity } = this.props;
    const {
      showLayer,
      layerSubmit,
      layerInput,
      layerOnClick,
      inputVal
    } = this.state;
    return (
      <>
        <Box
          pad={{ vertical: "small" }}
          border="bottom"
          gap="small"
          direction="row"
        >
          <Button
            label="Add new dealer"
            icon={<AddCircle />}
            reverse
            onClick={() =>
              this.setState({
                showLayer: true,
                layerSubmit: "Add dealer",
                layerInput: "Dealer info",
                layerOnClick: addEntity
              })
            }
            color="brand"
          />
          <Button
            label="Approve dealer"
            icon={<Checkmark />}
            reverse
            color="neutral-3"
            onClick={() =>
              this.setState({
                showLayer: true,
                layerSubmit: "Approve dealer",
                layerInput: "Dealer info",
                layerOnClick: signEntity
              })
            }
          />
          <Button
            label="Add a trusted friend"
            icon={<User />}
            reverse
            color="neutral-4"
            onClick={() =>
              this.setState({
                showLayer: true,
                layerSubmit: "Add friend",
                layerInput: "Friend info",
                layerOnClick: console.log
              })
            }
          />
          
        </Box>
        {showLayer ? (
          <Layer onClickOutside={() => this.setState({ showLayer: false })}>
            <Box gap="small" pad="medium" width="medium">
              <Text> {layerInput}:</Text>
              <TextInput
                value={inputVal}
                onChange={e => this.setState({ inputVal: e.target.value })}
              />
              <Button
                label={layerSubmit}
                onClick={() => {
                  this.setState({ showLayer: false });
                  layerOnClick(inputVal);
                }}
              />
            </Box>
          </Layer>
        ) : null}
      </>
    );
  }
}
export default ActionBar;
