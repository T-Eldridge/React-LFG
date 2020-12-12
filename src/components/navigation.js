import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, AppBar, Toolbar } from "@material-ui/core";

class Navigation extends Component {
  render() {
    return (
      <AppBar className="nav-image" position="static">
        <Toolbar>
          <h1>Looking For Games</h1>
        </Toolbar>
        <div align="center">
          <Button variant="contained" color="secondary">
            <Link to="/searchform">Home</Link>
          </Button>

          {this.props.userName ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.props.setUser("")}
            >
              {" "}
              <Link to="/">Logout</Link>
            </Button>
          ) : (
            <Button variant="contained" color="secondary">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </AppBar>
    );
  }
}

export default Navigation;
