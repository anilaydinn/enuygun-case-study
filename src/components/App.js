import React from "react";
import Header from "./header/Header";
import "../style/App.scss";
import { Route, Switch } from "react-router-dom";
import EmployeList from "./employee/EmployeList";
import EmployeDetail from "./employee/EmployeDetail";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <EmployeList />
        </Route>
        <Route exact path="/employe/:id">
          <EmployeDetail />
        </Route>
      </Switch>
    </div>
  );
}
