import React, { Component } from "react";
import { Button } from "@material-ui/core";

const axios = require("axios");

class SearchForm extends Component {
  state = {
    results: [],
    input: "",
    gameID: null,
  };

  onChange = (e) => {
    this.setState({ input: e.target.value });
  };

  getGames = (e) => {
    e.preventDefault();
    axios(
      `https://api.rawg.io/api/games?api_key=291d0c162cac4826b13adeca8fb3dcfe&search=` +
        this.state.input
    ).then((res) => {
      const results = res.data.results;
      this.setState({ results: [...results] });
      console.log(results);
    });
  };

  handleAddFav = (e) => {
    this.setState({ gameID: e.target.id });
    console.log("gameID", this.state.gameID);
    let fav = this.props.favGameObj;
    const id = e.currentTarget.id;
    const existingFav = this.props.favorites.find((x) => x.gameID == id);
    let game = this.state.results.find((g) => g.id == id);
    fav.username = this.props.userName;
    fav.gameID = game.id;
    fav.gameName = game.name;
    this.props.setFavGameObj(fav);
    axios.post("http://localhost:4001/favorites", fav);
    !existingFav && this.props.addFav(fav);
  };

  render() {
    console.log("searchform props", this.props.userName);
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
                    id={results.id}
                    onClick={this.handleAddFav}
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
                  <h4>Game Rating: {results.rating}</h4>
                  <h4>Date Released: {results.released}</h4>
                </ul>
              </p>
            );
          })}
        </form>
      </div>
    );
  }
}

export default SearchForm;
