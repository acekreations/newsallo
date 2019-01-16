import React, { Component } from "react";
import Loader from "../../components/Loader";

class Home extends Component {
    state = {
        loading: true
    };

    

    render() {
        return (
            <div>
                {this.props.children}
                <div className="mainContainer">
                    {this.state.loading && <Loader />}
                </div>
            </div>
        );
    }
}

export default Home;
