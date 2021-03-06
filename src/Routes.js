import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Company from "./components/Company";
import Registration from "./components/Registration";
import Login from "./components/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
    </Switch>
  );
};

export default Routes;
