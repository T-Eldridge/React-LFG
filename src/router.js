import React from 'react';
import { Switch, Route } from 'react-router';
import Login from "./containers/login";
import Game from "./containers/games"
import searchForm from "./components/searchForm"


const Router = () => {
    return (
        <Switch>
            <Route  path= "/login" component ={Login} />
            <Route  path="/games/:id" component ={Game}/>
            <Route exact path= "/" component={searchForm} />
            
        </Switch>
    )
}

export default Router;