import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";

class Home extends Component {
    state = {};

    componentDidMount() {
        const thisComp = this;
        API.getUserNews(localStorage.getItem("sources"), 5).then(function(res) {
            const shuffled = thisComp.shuffle(res.data);
            thisComp.setState({
                news: shuffled
            });
        });
    }

    shuffle = array => {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    render() {
        return (
            <div>
                {this.props.children}
                {this.state.news ? (
                    <div className="newsContainer">
                        <Card news={this.state.news} />
                    </div>
                ) : (
                    <div>
                        <i className="loading fas fa-spinner" />
                    </div>
                )}
            </div>
        );
    }
}

export default Home;
