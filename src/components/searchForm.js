
import React, { Component } from 'react';
import { Button } from "@material-ui/core";
const axios = require("axios");
const dotenv = require('dotenv')
dotenv.config()
const api_key = process.env.API_KEY



class App extends Component {
    state = {
        userName: false,
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

    

    // conditionally render add favs button when logged in
        render() {
            if(this.props.userName) {
                return (
                    <div>
                    <form onSubmit={this.getGames}>
                        <input onChange={this.onChange}></input>
                        <button type="submit">Find Game</button>
                        {this.state.results.map((results) => {
                    return (
                        <div>
                            {" "}
                            <h2>{results.name}</h2>
                            <Button onSubmit={this.addFav} color="secondary" variant="contained">Favorite</Button>
                            <ul>
                                <img 
                                src={results.background_image} 
                                alt="game art"
                                width="250"
                                height="250">
                                </img>
                                <h4>Game Rating:{results.rating}</h4>
                                <h4>Date Released:{results.released}</h4>
                            </ul>
                        </div>
                    )
                })}
                    </form>
                    </div>
                )
            } else if (!this.props.userName) {
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
                            <ul>
                                <img 
                                src={results.background_image} 
                                alt="game art"
                                width="250"
                                height="250">
                                </img>
                                <h4>Game Rating:{results.rating}</h4>
                                <h4>Date Released:{results.released}</h4>
                            </ul>
                        </p>
                    )
                })}
            </form>
            </div>
            
            )
        }
    }


}

export default App;