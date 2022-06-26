import React, { Component } from "react";
import "../styles/generalinfo.css";

export default class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            isSubmitted: false,
        }
    }

    firstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }

    lastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    emailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    phoneNumberChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    } 

    submit = () => {
        this.setState({
            isSubmitted: true
        });
    }

    edit = () => {
        this.setState({
            isSubmitted: false
        });
    }
    
    render() {
        const isSubmitted = this.state.isSubmitted;
        if(!isSubmitted) {
            return (
                <div className="general-information">
                    <h3>General Information</h3>
                    <input placeholder="First name" onChange={this.firstNameChange} value={this.state.firstName} />
                    <input placeholder="Last name" onChange={this.lastNameChange} value={this.state.lastName} />
                    <input type="email" placeholder="Email" onChange={this.emailChange} value={this.state.email} />
                    <input placeholder="Phone number" onChange={this.phoneNumberChange} value={this.state.phoneNumber} />
                    <div className="btn-container">
                        <button onClick={this.submit} >Add</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="general-information">
                    <div className="info-flex">
                        <h4>First name:</h4>
                        <p>{this.state.firstName}</p>
                    </div>
                    <div className="info-flex">
                        <h4>Last name:</h4>
                        <p>{this.state.lastName}</p>
                    </div>
                    <div className="info-flex">
                        <h4>Email:</h4>
                        <p>{this.state.email}</p>
                    </div>
                    <div className="info-flex">
                        <h4>Phone number:</h4>
                        <p>{this.state.phoneNumber}</p>
                    </div>
                    <button onClick={this.edit}>Edit</button>
                </div>
            )
        }
    }
}