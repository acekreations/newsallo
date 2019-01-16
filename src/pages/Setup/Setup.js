import React, { Component } from "react";
import { BrowserRouter as Route, Router, Redirect } from "react-router-dom";
import SourceSelector from "../../components/SourceSelector";

class Setup extends Component {
    state = {
        redirectHome: false
    };

    render() {
        //check if redirectHome is set to true, if so redirect home
        if (this.state.redirectHome === true) {
            return <Redirect to="/" />;
        }
        return (
            <div className="mainContainer">
                {this.props.children}
                <h1>Welcome</h1>
                <h3>
                    To start please select a few news sources below that you
                    would like to see articles from.
                </h3>
                <SourceSelector homeBtn={false} />
            </div>
        );
    }
}

export default Setup;
