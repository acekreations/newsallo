import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";

class Landing extends Component {
    componentDidMount() {
        console.log("stuff");
    }

    render() {
        return (
            <div>
                <LoginForm />
            </div>
        );
    }
}

export default Landing;
