import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import sourcesFile from "../../sources.json";

class SourceSelector extends Component {
    state = {
        sources: sourcesFile.data,
        redirectHome: false
    };

    componentDidMount() {
        this.checkExisting();
    }

    checkExisting = () => {
        if (localStorage.getItem("sources")) {
            //slit sources string from localstorage
            const ls = localStorage.getItem("sources").split(",");
            const ss = this.state.sources;
            //loop sources from state(sources.json file)
            for (let i = 0; i < ss.length; i++) {
                //loop local storage sources
                for (let j = 0; j < ls.length; j++) {
                    //if they match set 'selected: true' in obj from var ss
                    if (ss[i].id === ls[j]) {
                        ss[i].selected = true;
                    }
                }
            }
            //set state with newly updated sources array
            this.setState({
                sources: ss
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

    handleBackHome = () => {
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
                <div className="sourceSelectorContainer">
                    {this.state.sources.map((source, index) => (
                        <button
                            className={
                                source.selected ? "pillBtn" : "pillBtn disabled"
                            }
                            key={index}
                            onClick={() => this.handleSourceClick(index)}
                        >
                            {source.name}
                            {/* {source.selected && <i className="fas fa-check" />} */}
                        </button>
                    ))}
                </div>
                <hr />
                <button className="pillBtn" onClick={this.handleSave}>
                    <i className="fas fa-save" /> Save
                </button>
		{/* don't show on create page */}
		{this.props.homeBtn === true && 
                	<button className="pillBtn" onClick={this.handleBackHome}>
                    		<i className="fas fa-home" /> Home
                	</button>
		}
            </div>
        );
    }
}

export default SourceSelector;
