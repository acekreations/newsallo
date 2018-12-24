import React, { Component } from "react";

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
        errorNotice: true,
        loading: false
    };

    //put email input into state
    handleFormChange = e => this.setState({ signUpForm: e.target.value });

    //validate and submit email to api
    handleForm = () => {
        const email = document.getElementById("signUpInput").value;
        const patt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;

        //validate email format. display notice if not formatted correctly
        if (patt.test(email)) {
            //api call
            this.setState({
                loading: true
            });
        } else {
            this.setState({
                errorNotice: "Please enter a valid email address."
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
                    <h1 style={inputHeader}>Sign In / Sign Up</h1>
                    <hr />
                    {this.state.loading ? (
                        <p>Loading</p>
                    ) : (
                        <form style={oneHundred}>
                            <div>
                                {this.state.errorNotice.length && (
                                    <p className="error">
                                        {this.state.errorNotice}
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
