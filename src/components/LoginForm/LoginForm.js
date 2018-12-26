import React, { Component } from "react";
import API from "../../utils/API";
import Loader from "../Loader";

const loginCard = {
    width: "300px"
};

const oneHundred = {
    width: "100%"
};

const inputHeader = {
    paddingTop: "10px",
    paddingBottom: "10px"
};

class Landing extends Component {
    state = {
        signUpForm: "",
        errorNotice: false,
        loading: false,
        header: "Login / Signup",
        message: ""
    };

    //put email input into state
    handleFormChange = e => this.setState({ signUpForm: e.target.value });

    //validate and submit email to api
    handleForm = () => {
        const email = document.getElementById("signUpInput").value;
        const patt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;

        //validate email format. display notice if not formatted correctly
        if (patt.test(email)) {
            const thisComp = this;
            this.setState({
                loading: true
            });

            API.submitEmail(email).then(function(res) {
                console.log(res);
                if (res.data.success) {
                    thisComp.setState({
                        header: "Please Check Your Email",
                        loading: false,
                        message: res.data.message
                    });
                }
            });
        } else {
            this.setState({
                errorNotice: true
            });
        }
    };

    //allow use of enter key to submit form
    handleFormEnterKey = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            this.handleForm();
        }
    };

    render() {
        return (
            <div>
                <div style={loginCard} className="card animated centered">
                    <h1 style={inputHeader}>{this.state.header}</h1>
                    <hr />
                    {this.state.loading ? (
                        <Loader />
                    ) : //If message is present, display message else show form
                    this.state.message.length > 0 ? (
                        <h2>{this.state.message}</h2>
                    ) : (
                        <form style={oneHundred}>
                            <div>
                                {this.state.errorNotice && (
                                    <p className="error">
                                        Please enter a valid email address.
                                    </p>
                                )}
                                {this.props.errorMessage && (
                                    <p className="error">
                                        {this.props.errorMessage}
                                    </p>
                                )}
                                <label>Email:</label>
                                <input
                                    id="signUpInput"
                                    style={oneHundred}
                                    type="email"
                                    placeholder="jeff@example.com"
                                    value={this.state.signUpForm}
                                    onChange={this.handleFormChange.bind(this)}
                                    onKeyPress={this.handleFormEnterKey}
                                />
                            </div>
                            <button
                                style={oneHundred}
                                type="button"
                                onClick={this.handleForm}
                            >
                                Submit
                            </button>
                        </form>
                    )}
                    <hr />
                    <p className="helperText">
                        When you enter your email address we will send you a
                        special link to sign you in.
                    </p>
                </div>
            </div>
        );
    }
}

export default Landing;
