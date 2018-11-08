import React, { Component } from "react";
import SourceSelector from "../../components/SourceSelector";

class Settings extends Component {
    render() {
        return (
            <div className="mainContainer">
                {this.props.children}
                <h1>Settings</h1>
                <h3>
                    Select the news sources you would like to see articles from.
                </h3>
                <SourceSelector />
            </div>
        );
    }
}

export default Settings;
