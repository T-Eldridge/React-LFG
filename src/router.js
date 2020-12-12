import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./containers/login";
import cookie from "cookie";
import SearchForm from "./containers/searchForm";
import Dashboard from "./containers/dashboard";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/searchform" component={SearchForm} />
    </Switch>
  );
};

export default Router;
