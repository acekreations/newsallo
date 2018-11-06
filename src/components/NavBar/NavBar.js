import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div id="navBar">
                <div id="logoContainer">
                    <Link to="/">
                        <h1 id="logo">newsallo</h1>
                    </Link>
                </div>
                <div id="menuContainer">
                    <Link to="/settings">
                        <i className="fas fa-sliders-h" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
