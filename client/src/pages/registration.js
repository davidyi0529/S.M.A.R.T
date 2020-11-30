import React, { Component} from "react";
import Login from "../Components/auth/login";
import Registration from "../Components/auth/registration";

export default class LoggedIn extends Component {
    constuctor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/home");
    }

    render() {
        return(
            <div>
                <Jumbotron />
                <h1>Login</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}