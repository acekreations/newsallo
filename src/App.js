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
import NavBar from "./components/NavBar";

class App extends Component {
    render() {
        return (
            <Router>
                <div id="pageContainer">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() =>
                                localStorage.getItem("userID") ? (
                                    <Home>
                                        <NavBar />
                                    </Home>
                                ) : (
                                    <Redirect to="/create" />
                                )
                            }
                        />
                        <Route
                            exact
                            path="/create"
                            render={() => (
                                <Create>
                                    <NavBar />
                                </Create>
                            )}
                        />
                        <Route
                            exact
                            path="/settings"
                            render={() => (
                                <Settings>
                                    <NavBar />
                                </Settings>
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
