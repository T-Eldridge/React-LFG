import React from 'react';
import { Switch, Route } from 'react-router';
import Login from "./containers/login";
import Game from "./containers/games"


const Router = () => {
    return (
        <Switch>
            <Route exact path= "/login" component ={Login} />
            <Route path="/games" component ={Game}/>
            <Route />
            <Route />
        </Switch>
    )
}

export default Router;