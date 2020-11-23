import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../containers/searchBar'
import { Button } from '@material-ui/core';
import Game from './games'


class App extends Component {
    state = {
        results: [],
        searchfield: ''
    }

    consol = () => {
        console.log(this.state.results)
    }
 
    getGames = () => {
        return axios.get('https://api.rawg.io/api/games')
        .then(res => {
            const results = res.data.results
            this.setState({ results: [...results]})
        })
    }

    componentDidMount() {
        this.getGames()
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }

    render() {
        const filterOnName = this.state.results.filter(results => {
            return results.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
        if (this.state.results.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div>
                    <SearchBar results={this.state.results} filterChange={this.onSearchChange} />
                    <Button onClick={this.consol}>Find Game</Button>
                    <Game results name={filterOnName} />
                </div>
            )
        }
    }
}

export default App;