import React from "react";
import { FormClose, StatusGood, StatusCritical } from "grommet-icons";
import { Box, Button, Layer, Text } from "grommet";

const Notification = ({ open, onClose, text, good }) =>
  open && (
    <Layer
      position="bottom"
      modal={false}
      margin={{ vertical: "medium", horizontal: "small" }}
      onEsc={onClose}
      responsive={false}
      plain
    >
      <Box
        align="center"
        direction="row"
        gap="small"
        justify="between"
        round="medium"
        elevation="medium"
        pad={{ vertical: "xsmall", horizontal: "small" }}
        background={good ? "status-ok" : "status-error"}
      >
        <Box align="center" direction="row" gap="xsmall">
          {good ? <StatusGood /> : <StatusCritical />}
          <Text>{text}</Text>
        </Box>
        <Button icon={<FormClose />} onClick={onClose} plain />
      </Box>
    </Layer>
  );

export default Notification;
