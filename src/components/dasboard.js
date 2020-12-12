import React, { Component } from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import SearchForm from "../components/searchForm";

const axios = require("axios");
class Dashboard extends Component {
  state = {
    favorites: [],
  };

  // toggleDialog = () => this.setState({open: !this.state.open});

  handleSubmit = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  getFavs = () => {
    axios(`/favorites/${this.props.userName}`).then((res) => {
      const favorites = res.data;
      this.setState({ favorites });
      console.log("res", res);
      console.log("res.data", res.data);
      console.log("res.data.results", res.data.results);
      console.log("these are favs", favorites);
      console.log("fav state", this.state.favorites);
    });
  };

  // functions go here
  // write get favs and delete favs Functions

  render() {
    console.log("dashboard props", this.props.userName);
    return (
      <div>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" size="small" variant="head">
                  {" "}
                  <h2>{this.props.userName}'s Favorite Games: </h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.favorites.map((favorites) => {
                return <h2>{favorites.gameName}</h2>;
              })}
            </TableBody>
          </Table>
          <Button onClick={this.getFavs} variant="contained" color="secondary">
            My Favorites
          </Button>
          <SearchForm
            userName={this.props.userName}
            setFavGameObj={this.props.setFavGameObj}
            favorites={this.props.favorites}
            addFav={this.props.addFav}
            favGameObj={this.props.favGameObj}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
