import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
    state = {
        text: ""
    };
    componentDidMount() {
        const thisComp = this;
        API.getHello().then(function(res) {
            thisComp.setState({
                text: res.data
            });
        });
    }
    render() {
        return <h1>{this.state.text}</h1>;
    }
}

export default Home;
