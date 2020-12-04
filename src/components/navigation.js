import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Navigation = (props) => {
    const cookies = cookie.parse(document.cookie);
        return (
            <div>
                <AppBar position="relative">
                    <Toolbar>
                        <IconButton color="default">

                        </IconButton>
                        <Typography variant="h3" style={{flexGrow: "1"}}>
                        Looking For Game
                        </Typography>
                        <ul className="nav-list">
                               <li className="nav-list-item">
                                {document.cookie === "loggedIn=true" && (
                                <div>
                                    <Button
                                    onClick={() => {
                                        document.cookie = "loggedIn=";
                                        window.location.replace("/login");
                                    }}
                                    >
                                    Logout
                                    </Button>
                                </div>
                             )}
                            </li>
                            <li className="nav-list-item">
                                {document.cookie !== "loggedIn=true" && (
                                    <Button
                                    onClick={() => {
                                        document.cookie = "loggedIn";
                                        window.location.replace("/login");
                                    }}
                                    >
                                        Login
                                    </Button>
                                )}
                            </li>

                    </ul>
                </Toolbar>
            </AppBar>
            <Typography color="textPrimary">
                {cookies.loggedIn && (
                    <span>Welcome{props.user.username}!</span>
                    
                )}
            </Typography>
        </div>
    );
};

export default Navigation;