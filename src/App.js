import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
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
                                    <Redirect to="/home" />
                                ) : (
                                    <Landing>
                                        <NavBar settings={false} />
                                    </Landing>
                                )
                            }
                        />
                        <Route
                            exact
                            path="/home"
                            render={() =>
                                localStorage.getItem("userID") ? (
                                    <Home>
                                        <NavBar settings={true} />
                                    </Home>
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                        <Route
                            exact
                            path="/settings"
                            render={() => (
                                <Settings>
                                    <NavBar settings={true} />
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
