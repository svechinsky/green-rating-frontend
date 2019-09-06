import React, { useState } from "react";
import { Box, Text, Layer, Button, TextInput } from "grommet";
import { Help, UserSettings, SettingsOption } from "grommet-icons";

const UserBar = ({ user, baseUrl, changeBaseUrl }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [peerDiscovery, setPeerDiscovery] = useState("GR://226.23.84.31:420");
  return (
    <React.Fragment>
      <Box
        pad={{ bottom: "small" }}
        alignSelf="center"
        border="bottom"
        direction="row"
        width="100%"
        align="center"
        justify="between"
      >
        <Box>
          <Text weight="bold">{`Hi ${user.name}`}</Text>
        </Box>
        <Box direction="row">
          <Button
            color="brand"
            onClick={() => setShowUserInfo(true)}
            label="My details"
            reverse
          />
          <Button
            icon={<SettingsOption />}
            onClick={() => setShowSettings(true)}
          />
        </Box>
      </Box>
      {showUserInfo ? (
        <Layer onClickOutside={() => setShowUserInfo(false)}>
          <Box pad="xlarge">
            <Text>
              <b>Name:</b> {user.name}
            </Text>
            <Text>
              <b>Key:</b> {user.pubkey}
            </Text>
          </Box>
        </Layer>
      ) : null}
      {showSettings ? (
        <Layer onClickOutside={() => setShowSettings(false)}>
          <Box pad="xlarge">
            <Text>
              <b>Node address</b>
            </Text>
            <TextInput
              value={baseUrl}
              onChange={e => changeBaseUrl(e.target.value)}
            />
            <Text>
              <b>Peer discovery</b>
            </Text>
            <TextInput
              value={peerDiscovery}
              onChange={e => setPeerDiscovery(e.target.value)}
            />
          </Box>
        </Layer>
      ) : null}
    </React.Fragment>
  );
};

export default UserBar;
