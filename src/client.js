import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import createStore from "../src/helpers/createStore";
import { BrowserRouter } from "react-router-dom";

const initialState = window.__INITIAL_STATE__;

const store = createStore(initialState);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
