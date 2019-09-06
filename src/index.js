import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import styled from "styled-components";
import { Grommet } from "grommet";
import { createBrowserHistory } from "history";
import { configureStore } from "./store";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/app/App";
import initialState from "./store/initialState";
import { AppContainer } from "react-hot-loader";
import weedBackground from "./assets/background.jpg"

const theme = {
  global: {
    colors: {
      brand: "#89B03F"
    }
  }
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  background-image:url(${weedBackground});
  /* background: whitesmoke; */
`;
export const history = createBrowserHistory();

const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <Grommet theme={theme}>
      <FlexWrapper>
        <App />
      </FlexWrapper>
    </Grommet>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
