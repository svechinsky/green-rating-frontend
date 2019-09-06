import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Layer, Text, Box } from "grommet";
import { hot } from "react-hot-loader/root";

import Home from "./containers/home/Home";
import { history } from "./index";
import Notification from "./components/notification/Notification";
import NoNode from "./containers/no-node/NoNode";

function PrivateRoute({ user, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/no-node",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends React.Component {
  constructor(props) {
    props.initialize();
    super(props);
  }

  render() {
    const {
      isInitialized,
      user,
      notification,
      removeNotification,
      newSigned,
      removeSigned
    } = this.props;
    if (!isInitialized) {
      return <h1> Loading </h1>;
    }
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Switch>
            <PrivateRoute user={user} exact path="/" component={Home} />

            <Route exact path="/no-node" component={NoNode} />
          </Switch>
        </ConnectedRouter>
        <Notification {...notification} onClose={removeNotification} />
        {newSigned ? (
          <Layer onClickOutside={removeSigned}>
            <Box pad="medium" align="center" direction="column">
              <Text>
                <b>Signed dealer:</b> </Text><Text>{JSON.stringify(newSigned)}
              </Text>
            </Box>
          </Layer>
        ) : null}
      </React.Fragment>
    );
  }
}

export default (process.env.NODE_ENV === "development" ? hot(App) : App);
