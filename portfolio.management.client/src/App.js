import React from "react";
//import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MainLayout from "./layout/MainLayout";
import PageNotFound from "./Components/PageNotFound";
import componentQueries from "react-component-queries";
import "./styles/reduction.scss";

function App() {
  return (
    <Switch>
      <MainLayout>
        <Route exact path="/" component={HomePage} />
      </MainLayout>
      <Route component={PageNotFound} />
    </Switch>
  );
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default componentQueries(query)(App);
