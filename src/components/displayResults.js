import React from 'react';
import {Card, CardContent, CardActions, Divider } from '@material-ui/core';
import { Link }  from 'react-router-dom'

// Need to display search resulsts

const DisplayResults = (props) => {
    return (
        
        <div className="card-container">
            <p>Games!</p>
            {this.results.map((results, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{results.name.toUpperCase()}</span>
                        <ul>
                            <li>Date Released: {results["released"]}</li>
                            <li>Rating: {results["rating"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumpurple'}}>
                        {/* after back end built add link to favorites list */}
                    </CardActions>
                </Card>

            ))}
        </div>
    )
}

// add game to favorites button 
// remove game from favorties button 

export default DisplayResults