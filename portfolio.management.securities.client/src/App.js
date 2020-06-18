import React from "react";
import { Route, Switch } from "react-router-dom";
//import PrivateRoute from "react-private-route";

import "./App.css";

import LoginPage from "./Components/login/LoginPage";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
