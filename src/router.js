import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Login from "./containers/login";
import searchForm from "./components/searchForm"
import Dashboard from './components/dasboard';

const checkAuth = (cookie) => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component, ...rest }) => {
    return (
        <Route 
        {...rest}
        render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
        }
        />
    )
}
 

const Router = () => {
    return (
        <Switch>
            <ProtectedRoute path= "/dashboard" component={Dashboard}  />
            <Route  path= "/login" component={Login} />
            <Route path= "/search" component={searchForm} />
            <Route exact path= "/" component={searchForm} />
            
        </Switch>
    )
}

export default Router;