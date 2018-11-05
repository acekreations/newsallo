import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import SourceSelector from "../../components/SourceSelector";

class Create extends Component {
    state = {
        redirectHome: false
    };

    componentDidMount() {
        this.createUser();
    }
    createUser = () => {
        //if localstorage is not set create the user id
        if (!localStorage.getItem("userID")) {
            let id = "";
            const possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 24; i++)
                id += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                );
            localStorage.setItem("userID", id);
        } else {
            //redirect home if localstorage is already set
            this.setState({
                redirectHome: true
            });
        }
    };

    render() {
        //check if redirectHome is set to true, if so redirect home
        if (this.state.redirectHome === true) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <h1>Welcome</h1>
                <SourceSelector />
            </div>
        );
    }
}

export default Create;
