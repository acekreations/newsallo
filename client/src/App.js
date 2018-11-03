import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";

class App extends Component {
    componentDidMount() {
        axios.get("/api/hello").then(function(res) {
            console.log(res);
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
