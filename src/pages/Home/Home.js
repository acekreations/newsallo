import React, { Component } from "react";
import Loader from "../../components/Loader";
import SourceSelector from "../../components/SourceSelector";
import UserSetup from "../../components/UserSetup";

class Home extends Component {
    state = {
        loading: true,
        returningUser: this.props.returningUser,
        UserSetupComplete: false
    };

    render() {
        return (
            <div>
                {this.props.children}
                <div className="mainContainer">
                    {/* {this.state.loading && <Loader />} */}
                    {this.state.returningUser ? (
                        <p>News feed here</p>
                    ) : (
                        <UserSetup />
                    )}
                </div>
            </div>
        );
    }
}

export default Home;
