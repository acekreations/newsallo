import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
    state = {};

    componentDidMount() {
        const thisComp = this;
        API.getUserNews(localStorage.getItem("sources")).then(function(res) {
            thisComp.setState({
                news: res.data
            });
        });
    }
    render() {
        return (
            <div>
                {this.state.news ? (
                    this.state.news.map(article => <h3>{article.title}</h3>)
                ) : (
                    <h3>Loading</h3>
                )}
            </div>
        );
    }
}

export default Home;
