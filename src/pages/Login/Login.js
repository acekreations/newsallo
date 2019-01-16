import React, { Component } from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Loader from "../../components/Loader";
import LoginForm from "../../components/LoginForm";

class Login extends Component {
    state = {
        loading: true,
        authToken: "",
        errorMessage: "",
        redirectHome: false
    };

    componentWillMount() {
        this.setState({
            authToken: this.props.propsObj.match.params.authToken
        });
    }

    componentDidMount() {
        this.login();
    }

    login = () => {
        const thisComp = this;
        API.login(this.state.authToken).then(function(res) {
            //successful start of session
            if (res.data.success) {
                //set session token in local storage
                localStorage.setItem("sessionToken", res.data.sessionToken);
                //check is session is now valid. Changes state in app.js
                thisComp.props.checkSession();
                //session initiation failed either because authToken expired or is an old or unrecognized token
            } else {
                //display login form with message
                thisComp.setState({
                    loading: false,
                    errorMessage: res.data.message
                });
            }
        });
    };

    render() {
        return (
            <div>
                {this.props.children}
                <div className="mainContainer">
                    <h1>Login</h1>
                    {this.state.loading ? (
                        <Loader />
                    ) : (
                        <LoginForm errorMessage={this.state.errorMessage} />
                    )}
                </div>
            </div>
        );
    }
}

export default Login;
