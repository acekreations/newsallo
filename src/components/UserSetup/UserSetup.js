import React, { Component } from "react";

class UserSetup extends Component {
    state = {
        username: "",
        firstName: "",
        lastName: ""
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div>
                <div className="card">
                    <h1 className="my-3">Account Details</h1>
                    <form id="userSetupForm">
                        <label htmlFor="username">Username*</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firsName}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </form>
                    <p>*required</p>
                </div>
            </div>
        );
    }
}
export default UserSetup;
