import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Settings from "./pages/Settings";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() =>
                                localStorage.getItem("userID") ? (
                                    <Home />
                                ) : (
                                    <Redirect to="/create" />
                                )
                            }
                        />
                        <Route exact path="/create" component={Create} />
                        <Route exact path="/settings" component={Settings} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
