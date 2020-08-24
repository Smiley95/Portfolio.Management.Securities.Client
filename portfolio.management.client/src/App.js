import React from "react";
//import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MainLayout from "./layout/MainLayout";
import PageNotFound from "./Components/PageNotFound";
import componentQueries from "react-component-queries";
import PortfolioList from "./Components/PortfoliosList";
import PrivateRoute from "./Components/Common/PrivateRoute";
import Portfolio from "./Components/Portfolio";
import AddAsset from "./Components/AddAsset";
import Asset from "./Components/Asset";
import { history } from "./redux/services/helper";
import PortfolioReport from "./Components/PortfolioReport";
import Login from "./layout/Login";
import "./styles/reduction.scss";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <MainLayout>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/portfolio" component={Portfolio} />
          <PrivateRoute exact path="/portfolios" component={PortfolioList} />
          <PrivateRoute exact path="/addAsset" component={AddAsset} />
          <PrivateRoute exact path="/asset" component={Asset} />
          <PrivateRoute exact path="/statistics" component={PortfolioReport} />
          {/* <Route exact path="/statistics" component={} />
                      <Route exact path="/optimizer" component={} />*/}
        </MainLayout>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
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
