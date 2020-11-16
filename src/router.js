import React from 'react';
import { Switch, Route } from 'react-router';
import Login from "./containers/login";


const Router = () => {
    return (
        <Switch>
            <Route exact path= "/login" component ={Login} />
            <Route />
            <Route />
            <Route />
        </Switch>
    )
}

export default Router;