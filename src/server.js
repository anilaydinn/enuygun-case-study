import express from "express";
import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import App from "./components/App";
import createStore from "./helpers/createStore";
import "babel-polyfill";
import { getAllEmployees } from "./api";
import { StaticRouter } from "react-router-dom";

const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  const employees = await getAllEmployees();

  const initialState = {
    employees: employees,
    employe: {},
  };

  const store = createStore(initialState);

  const ssr = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const html =
    `<html>` +
    `<head><title>En Uygun Case Study</title></head>` +
    `<body style="padding:0px !important; margin: 0px !important;">` +
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
