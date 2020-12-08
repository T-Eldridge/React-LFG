import React, { props } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const defaultUser = {
    userName: false,
};

const HandleLogin= (props) => {
    if (!props.user.userName) {
        return(
        <a href="/login">
            <Button>Login</Button>
        </a>
        );
    } else {
        return (
        <a href="/dashboard">
            <Button onClick={() => props.logoutUser(defaultUser)}></Button>
        </a>
        );
    };
};

export default HandleLogin;