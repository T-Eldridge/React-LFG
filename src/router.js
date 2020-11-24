import React from 'react';
import { Switch, Route } from 'react-router';
import Login from "./containers/login";
import Game from "./containers/games"
import searchForm from "./components/searchForm"


const Router = () => {
    return (
        <Switch>
            <Route exact path= "/" component={searchForm} />
            <Route  path= "/login" component ={Login} />
            <Route  path="/games/:id" component ={Game}/>
            
        </Switch>
    )
}

export default Router;