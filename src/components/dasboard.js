import React, { Component }from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
 } from '@material-ui/core';



class Dashboard extends Component {
    componentDidMount() {
        // if mounts display favorite games
        this.props.getUserFavorites(this.props.favorites) 
    }

    render() {
        return (
            <div>
                <div>
                    <Table>
                        <TableHead>
                           <h1>${this.props.user.username}Favorite Games</h1> 
                        </TableHead>
                        <TableBody>
                            <TableCell>
                                <TableRow align="left">
                                    <p style={{ paddingLeft: 60 }}>
                                       <b>Favorite Games</b>{" "}
                                       <b style={{ align: "right "}}>
                                           :${this.props.favorites}
                                       </b>
                                    </p>
                                </TableRow>
                            </TableCell>
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Dashboard;
