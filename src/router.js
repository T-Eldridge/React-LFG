import React from 'react';
import { Switch, Route } from 'react-router';
import Login from "./containers/login";
import searchForm from "./components/searchForm"


const Router = () => {
    return (
        <Switch>
            <Route  path= "/login" component ={Login} />
            <Route path= "/search" component ={searchForm} />
            <Route exact path= "/" component={searchForm} />
            
        </Switch>
    )
}

export default Router;