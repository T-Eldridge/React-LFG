import React, { Component }from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
 } from '@material-ui/core';
import { Link }  from 'react-router-dom'
import { render } from '@testing-library/react';

class Dashboard extends Component {
    componentDidMount() {
        // if mounts display favorite games 
    }

    render() {
        return (
            <div>
                <div>
                    <Table>
                        <TableHead>
                           <h1>Favorite Games</h1> 
                        </TableHead>
                        <TableBody>
                            <TableCell>
                                <TableRow align="left">
                                    <p style={{ paddingLeft: 60 }}>
                                        {/* display statement for favorites */}
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
