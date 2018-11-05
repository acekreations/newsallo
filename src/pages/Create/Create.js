import React, { Component } from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import sourcesFile from "../../sources.json";

class Create extends Component {
    state = {
        sources: sourcesFile.data,
        redirectHome: false
    };

    componentDidMount() {
        this.createUser();
    }
    createUser = () => {
        //if localstorage is not set create the user id
        if (!localStorage.getItem("userID")) {
            let id = "";
            const possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 24; i++)
                id += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                );
            localStorage.setItem("userID", id);
        } else {
            //redirect home if localstorage is already set
            this.setState({
                redirectHome: true
            });
        }
    };

    handleSourceClick = sourceIndex => {
        //when a source is clicked find the array item in state and add a 'selected: true' pair to the object
        // set to false if the 'selected: true' already exists
        let newSources = this.state.sources;
        if (newSources[sourceIndex].selected) {
            newSources[sourceIndex].selected = false;
        } else {
            newSources[sourceIndex].selected = true;
        }
        this.setState({
            sources: newSources
        });
    };

    handleSave = () => {
        let sourceSelection = [];
        this.state.sources.map(
            source => source.selected && sourceSelection.push(source.id)
        );
        localStorage.setItem("sources", sourceSelection.join(","));
        this.setState({
            redirectHome: true
        });
    };

    render() {
        //check if redirectHome is set to true, if so redirect home
        if (this.state.redirectHome === true) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <ul>
                    {this.state.sources.map((source, index) => (
                        <li
                            key={index}
                            onClick={() => this.handleSourceClick(index)}
                        >
                            <p>
                                {source.name}
                                {source.selected && " X"}
                            </p>
                        </li>
                    ))}
                </ul>
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default Create;
