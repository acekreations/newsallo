import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";

class Home extends Component {
    state = {};

    componentDidMount() {
        const thisComp = this;
        API.getUserNews(localStorage.getItem("sources"), 1).then(function(res) {
            thisComp.setState({
                news: res.data
            });
        });
    }
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
