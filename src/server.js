import express from "express";
import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import App from "./components/App";
import createStore from "./helpers/createStore";
import "babel-polyfill";
import { getAllEmployees } from "./api";

const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  const initialState = {};

  const store = createStore(initialState);

  const ssr = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const html =
    `<html>` +
    `<head><title>En Uygun Case Study</title></head>` +
    `<body>` +
    `<script>window.__INITIAL_STATE__=${JSON.stringify(
      initialState
    )};</script>` +
    `<div id="root">${ssr}</div>` +
    `<script src="/bundle.js"></script>` +
    `</body>` +
    `</html>`;

  res.send(html);
});

app.listen(8000, () => {
  console.log("Listening on 8000 port");
});
