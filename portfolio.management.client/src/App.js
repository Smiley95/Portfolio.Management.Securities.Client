import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
