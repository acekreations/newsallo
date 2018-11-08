import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";

class Home extends Component {
    state = {};

    componentDidMount() {
        const thisComp = this;
        API.getUserNews(localStorage.getItem("sources"), 25).then(function(
            res
        ) {
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
                    <div className="mainContainer">
                        <Card news={this.state.news} />
                        <div className="text-center">
                            <p>
                                That's all for now, come back in a few hours for
                                more news.
                            </p>
                            <hr />
                            <h1 className="ffLogo lightAcc">newsallo</h1>
                            <hr />
                        </div>
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
