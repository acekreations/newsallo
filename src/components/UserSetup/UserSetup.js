import React, { Component } from "react";
// const uploadWidget = cloudinary.createUploadWidget(
//     {
//         cloudName: "db2p0tqy6",
//         uploadPreset: "tdyhwqdo"
//     },
//     (error, result) => {
//         if (!error && result && result.event === "success") {
//             console.log("Done! Here is the image info: ", result.info);
//         }
//     }
// );

class UserSetup extends Component {
    state = {
        username: "",
        firstName: "",
        lastName: "",
        publicID: ""
    };

    uploadWidget() {
        window.cloudinary.openUploadWidget(
            {
                cloudName: "db2p0tqy6",
                uploadPreset: "tdyhwqdo",
                multiple: false,
                cropping: true,
                croppingAspectRatio: 1,
                sources: ["local", "url", "camera"],
                resourceType: "image",
                maxFileSize: 5000000
            },
            function(error, result) {
                if (result.event === "success") {
                    this.setState({
                        publicID: result.info.public_id
                    });
                }
            }
        );
    }

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
                    <button onClick={this.uploadWidget.bind(this)}>
                        Upload Profile Photo
                    </button>
                    <p>*required</p>
                </div>
            </div>
        );
    }
}
export default UserSetup;
