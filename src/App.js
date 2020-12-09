import React, { Component } from "react";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Navigation from "./containers/navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <BrowserRouter>
            <Navigation />
            <Router />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
