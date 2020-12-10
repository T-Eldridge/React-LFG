import React, { Component } from "react";
import { Button } from "@material-ui/core";
// import { userLoaded } from "../redux/actions";
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const api_key = process.env.API_KEY;

class App extends Component {
  state = {
    results: [],
    input: "",
    loggedin: false,
  };

  consol = () => {
    console.log(this.state.results);
  };

  onChange = (e) => {
    this.setState({ input: e.target.value });
  };

  loggedIn() {
    if (this.props.user.userName) {
      document.cookie = "loggedIn=true;max-age=600*1000";
      this.setState({ loggedin: true });
    }
  }

  getGames = (e) => {
    e.preventDefault();
    axios(
      `https://api.rawg.io/api/games?api_key=${api_key}&search=` +
        this.state.input
    ).then((res) => {
      const results = res.data.results;
      this.setState({ results: [...results] });
      console.log(results);
    });
  };

  // conditionally render add favs button when logged in
  render() {
    console.log("LOG A BITCH IN", this.props.userName);
    return (
      <div>
        <form onSubmit={this.getGames}>
          <input onChange={this.onChange}></input>
          <button type="submit">Find Game</button>
          {this.state.results.map((results) => {
            return (
              <p>
                {" "}
                <h2>{results.name}</h2>
                {this.props.userName && (
                  <Button
                    onSubmit={this.addFav}
                    color="secondary"
                    variant="contained"
                  >
                    Favorite
                  </Button>
                )}
                <ul>
                  <img
                    src={results.background_image}
                    alt="game art"
                    width="250"
                    height="250"
                  ></img>
                  <h4>Game Rating:{results.rating}</h4>
                  <h4>Date Released:{results.released}</h4>
                </ul>
              </p>
            );
          })}
        </form>
      </div>
    );
  }
}

export default App;
