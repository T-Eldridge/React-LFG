import React, { Component } from 'react';
const axios = require("axios");
const dotenv = require('dotenv')
dotenv.config()
const api_key = process.env.API_KEY




class App extends Component {
    state = {
        results: [],
        input: "",
    }

    consol = () => {
        console.log(this.state.results)
    }

    onChange = (e) => {
        this.setState({ input: e.target.value });
    };
    
    getGames = (e) => {
        e.preventDefault();
        axios(`https://api.rawg.io/api/games?api_key=${api_key}&search=` + this.state.input)
        .then(res => {
            const results = res.data.results
            this.setState({ results: [...results]})
            console.log(results)
        })
    }
    render() {
        return (
            <form onSubmit={this.getGames}>
                <input onChange={this.onChange}></input>
                <button type="submit">Find Game</button>
                {this.state.results.map((results) => {
                    return (
                        <p>
                            {" "}
                            <a href={results.background_image}>{results.name}</a>
                        </p>
                    )
                })}
            </form>
        )
    }


}

export default App;