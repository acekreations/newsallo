import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
    componentDidMount() {
        axios.get("/api/hello").then(function(res) {
            console.log(res);
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hello there</h1>
            </div>
        );
    }
}

export default App;
