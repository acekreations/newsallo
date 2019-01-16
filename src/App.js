import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import API from "./utils/API";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Settings from "./pages/Settings";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Setup from "./pages/Setup";

class App extends Component {
    state = {
        session: false
    };

    componentWillMount() {
        this.checkSession();
    }

    //check if user has a session
    checkSession = () => {
        const thisComp = this;
        if (localStorage.getItem("sessionToken")) {
            API.checkSession(localStorage.getItem("sessionToken")).then(
                function(res) {
                    if (!res.success) {
                        thisComp.setState({
                            session: true
                        });
                    }
                }
            );
        }
    };

    render() {
        return (
            <Router>
                <div id="pageContainer">
                    {this.state.session === false ? (
                        // UNPROTECTED PAGES
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
                                path="/login/:authToken"
                                render={propsObj => (
                                    <Login
                                        propsObj={propsObj}
                                        checkSession={this.checkSession}
                                    >
                                        <NavBar settings={false} />
                                    </Login>
                                )}
                            />
                            {/* catch all */}
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    ) : (
                        // PROTECTED PAGES
                        <Switch>
                            <Route
                                exact
                                path="/setup"
                                render={() => (
                                    <Setup>
                                        <NavBar settings={false} />
                                    </Setup>
                                )}
                            />
                            <Route
                                exact
                                path="/home"
                                render={() => (
                                    <Home>
                                        <NavBar settings={true} />
                                    </Home>
                                )}
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
                            {/* catch all */}
                            <Route render={() => <Redirect to="/home" />} />
                        </Switch>
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
