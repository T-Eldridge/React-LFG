import React from 'react';
import { Container, Paper, Chip } from '@material-ui/core';

const Game = (props) => {
    const id = props.match.params.id
    const game = props.game.find (g => g.id == id)

    return (
        <Container maxWidth="sm" className="game-container">
            <Paper className="game-paper">
                <h2>{game.name}</h2>
                {
                    Object.keys(game).map((key, idx) => {
                        return <Chip label={`${key}: ${game[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Game