import React, { Component } from "react";
import SourceSelector from "../../components/SourceSelector";

class Settings extends Component {
    render() {
        return (
            <div>
                <h1>Settings</h1>
                <SourceSelector />
            </div>
        );
    }
}

export default Settings;
