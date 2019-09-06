import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./rootReducer";
import ApiService from "../services/api/ApiService";

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState, history) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  const services = {
    apiService: ApiService
  };

  sagaMiddleware.run(rootSaga, services);

  return store;
}
