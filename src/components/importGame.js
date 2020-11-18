import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button,
    Container,
    Menu,
    MenuItem,
} from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer'
import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'

const ImportGames = (props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [idNum, setIdNum] = useState(null)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setIdNum(e.currentTarget.id)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Container>
            <Button
            onClick={props.fetchGames}
            variant="contained"
            color="primary"
            style={{ marginTop: 25}}>
                LIST GAMES
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Genre</TableCell>
                            <TableCell align="right">Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.games.map((item, id) => {
                            return (
                                <TableRow key={item.GameName}>
                                    <TableCell>{item.GameId}</TableCell>
                                    <TableCell align="left">
                                        <Button id={id} onClick={handleClick}>
                                            <MoreVert />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Button onClick={() => props.removeEntry(idNum)}>
                            <DeleteIcon/>
                            Delete
                        </Button>
                    </MenuItem>

                </Menu>
            </TableContainer>
        </Container>
    )
}

export default ImportGames