import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    TextField, 
    Button, 
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    } from '@material-ui/core';

class App extends Component {
    state = {
        userName: "",
        userPassword: "",
        redirect: false,
    };
    
    toggleDialog = () => this.setState({ open: !this.state.open});

    handleTextChange = (e) => {
        this.setState({ userName: e.target.value });
        this.setState({ userPassword: e.target.value });
    };

    login = (e) => {
        e.preventDefault();
        const userObject = {
            userName: this.state.userName,
            userPassword: this.state.userPassword,
        }
        
        this.props.loginUser(userObject);
    };

    createAccount = (e) => {
        const userObject = {
            userName: this.state.userName,
            userPassword: this.state.userPassword,
        };
        e.preventDefault();
        this.props.addUser(userObject);
        if (this.props.userName !== "") {
        } else {
        };
    };

    componentDidUpdate() {
        if (this.props.userName !== "") {
            document.cookie = "loggedIn=true;max-age=600*1000";
      this.setState({ redirect: true }); //leave this alone.
    } else {
    }
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />
        }
        return (
            <div className="App">
                <Container maxWidth="sm">
                    <h1>Please Enter Login Information</h1>
                    <form className="login-form" onSubmit={this.login}>
                        <TextField
                        required
                        onChange={this.handleTextChange}
                        value={this.state.username}
                        name="userName"
                        label="Username"
                        type="text" />

                        <TextField
                        required
                        onChange={this.handleTextChange}
                        value={this.state.userPassword}
                        name="userPassword"
                        label="Password"
                        type="password" />

                        <Button
                        type="submit"
                        className="login-button"
                        variant="contained"
                        color="secondary" >
                            Login
                        </Button>
                        <br />
                    </form>
                    <div>
                        <Button
                            variant="contained"
                            className="add-user"
                            onClick={this.toggleDialog}
                        >
                            Sign Up!
                        </Button>
                        <Dialog open={this.state.open} onClose={this.toggleDialog}>
                            <DialogTitle>Join The Dork Side!</DialogTitle>
                            <DialogContent>
                                <form
                                onSubmit={this.createAccount}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "350px",
                                }}
                                >
                                    <TextField
                                    id="userName"
                                    placeholder="Desired Username"
                                    value={this.state.userName}
                                    onChange={this.handleTextChange}
                                    name="userName"
                                    label="Username"
                                    type="text"
                                    required
                                    />
                                    <TextField
                                    id="userPassword"
                                    placeholder="Password"
                                    value={this.state.userPassword}
                                    onChange={this.handleTextChange}
                                    name="userPassword"
                                    label="Password"
                                    type="password"
                                    required
                                    />
                                    <br />
                                    <Button variant="contained" color="secondary" type="submit">
                                        Submit!
                                    </Button>
                                    </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </Container>
            </div>
        );
    }
}

export default App;