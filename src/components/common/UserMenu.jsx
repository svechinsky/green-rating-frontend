import React from "react";
import { Box, Menu } from "grommet";
import { Home } from "grommet-icons";
import { Link } from "react-router-dom";
import { history } from "../../index";
import ClickableIcon from "./ClickableIcon";

const UserMenu = props => {
  let items = []; // eslint-disable-line
  const { user, logout } = props;
  if (user.isOwner) {
    items.push({
      label: "Add meal",
      onClick: () => history.push("/create-meal")
    });
  }
  items.push({ label: "Logout", onClick: logout });
  return (
    <Box {...props} justify="start" align="center" direction="row">
      <Link to="/">
        <ClickableIcon>
          <Home size="medium" color="brand" />
        </ClickableIcon>
      </Link>
      <Menu plain label={`Hello ${user.username}`} items={items} />
    </Box>
  );
};

export default UserMenu;
