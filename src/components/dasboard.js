import React, { Component }from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
 } from '@material-ui/core';
 import App from "../components/searchForm"




class Dashboard extends Component {
    state = {
        open: false,
        favorites: ""
    }

    // toggleDialog = () => this.setState({open: !this.state.open});

    handleSubmit = (e) => {
        const newState = {...this.state };
        newState[e.target.id] = e.target.value;
    this.setState(newState)    
    };
   
    // functions go here
    // write get favs and delete favs Functions



    render() {
        return (
            <div>
                <div>
                    <Table>
                        <TableHead>
                           <h1> {this.props.userName}Favorite Games</h1> 
                        </TableHead>
                        <TableBody>
                            <TableCell>
                                <TableRow align="left">
                                    <p style={{ paddingLeft: 60 }}>
                                       <b>Favorite Games</b>{" "}
                                       <b style={{ align: "right "}}>
                                           :{this.props.favorites}
                                       </b>
                                    </p>
                                </TableRow>
                            </TableCell>
                        </TableBody>
                    </Table>
                    <App />
                </div>
            </div>
        )
    }
}

export default Dashboard;
