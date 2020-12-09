import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, AppBar, Toolbar } from "@material-ui/core";

class Navigation extends Component {
  render() {
    return (
      <AppBar style={{ background: "blue" }} position="static">
        <Toolbar>
          <h1>Looking For Games</h1>
        </Toolbar>
        <div align="center">
          <a href="/">
            <Button>Home</Button>
          </a>
          {this.props.userName ? (
            <a href="/">
              <Button onClick={() => this.props.setUser("")}>Logout</Button>
            </a>
          ) : (
            <a href="/login">
              <Button>Login</Button>
            </a>
          )}
        </div>
      </AppBar>
    );
  }
}

export default Navigation;
