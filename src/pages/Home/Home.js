import React, { Component } from "react";
import Loader from "../../components/Loader";

class Home extends Component {
    state = {
        loading: true,
        returningUser: this.props.returningUser
    };

    render() {
        return (
            <div>
                {this.props.children}
                <div className="mainContainer">
                    {/* {this.state.loading && <Loader />} */}
                    {this.state.returningUser ? <p>returning</p> : <p>new</p>}
                </div>
            </div>
        );
    }
}

export default Home;
