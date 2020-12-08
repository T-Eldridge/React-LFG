import React, { Component } from 'react';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HandleLogin from './containers/handlelogin';
import { Button, AppBar, Toolbar } from "@material-ui/core";


class App extends Component {
  render () {
    return (
      <Provider store={store}>
      <div className="container">
      <BrowserRouter>
      <AppBar style={{ background: "blue" }} position="static">
        <Toolbar>
          <h1>Looking For Games</h1>
        </Toolbar>
        <div align="center">
          <a href="/">
            <Button>Home</Button>
          </a>
        <HandleLogin />
        </div>
      </AppBar>
      <Router />
      </BrowserRouter>
    </div>
    </Provider>
    )
  }
}

export default App;
