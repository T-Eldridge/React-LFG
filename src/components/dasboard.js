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

class Dashboard extends Component {
  state = {
    favorites: "",
  };

  // toggleDialog = () => this.setState({open: !this.state.open});

  handleSubmit = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
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
              <TableRow align="left">
                <TableCell> {this.props.userName}'s Favorite Games: </TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
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
