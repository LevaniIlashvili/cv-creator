import React, { Component } from "react";
import "../styles/job.css";

export default class Job extends Component {
    constructor() {
        super();

        this.state = {
            companyName: "",
            positionTitle: "",
            from: "",
            to: "",
            jobForm: "begining"
        }
    }

    companyNameChange = (e) => {
        this.setState({
            companyName: e.target.value
        });
    }

    positionTitleChange = (e) => {
        this.setState({
            positionTitle: e.target.value
        });
    }

    dateFromChange = (e) => {
        this.setState({
            from: e.target.value
        });
    }

    dateToChange = (e) => {
        this.setState({
            to: e.target.value
        });
    }

    add = () => {
        this.setState({
            jobForm: "submitted"
        });
    }

    showInputs = () => {
        this.setState({
            jobForm: "editing"
        });
    }

    edit = () => {
        this.setState({
            jobForm: "editing"
        });
    }

    delete = () => {
        this.setState({
            jobForm: "begining"
        });
    }


    render() {
        if (this.state.jobForm === "begining") {
            return (
                <div>
                    <h3>Work experience</h3>
                    <div className="btn-container">
                        <button onClick={this.showInputs} >Add</button>
                    </div>
                </div>
            )
        } else if (this.state.jobForm === "editing") {
            return (
                <div className="job">
                    <input placeholder="Company name" value={this.state.companyName} onChange={this.companyNameChange} />
                    <input placeholder="Position title" value={this.state.positionTitle} onChange={this.positionTitleChange} />
                    <div className="date-div">
                        <p>From:</p>
                        <input type="date" value={this.state.from} onChange={this.dateFromChange} />
                    </div>
                    <div className="date-div">
                        <p>To:</p>
                        <input type="date" value={this.state.to} onChange={this.dateToChange} />
                    </div>
                    <div className="btn-container">
                        <button onClick={this.add} >Add</button>
                        <button onClick={this.delete} >Delete</button>
                    </div>
                </div>
            )
        } else if (this.state.jobForm === "submitted") {
            return (
                <div className="job">
                    <div className="info-flex">
                        <h4>Company name:</h4>
                        <p>{this.state.companyName}</p>
                    </div>
                    <div className="info-flex">
                        <h4>Position title:</h4>
                        <p>{this.state.positionTitle}</p>
                    </div>
                    <div className="info-flex">
                        <h4>From:</h4>
                        <p>{this.state.from}</p>
                    </div>
                    <div className="info-flex">
                        <h4>To:</h4>
                        <p>{this.state.to}</p>
                    </div>
                    <div className="btn-container">
                        <button onClick={this.edit} >Edit</button>
                        <button onClick={this.delete} >Delete</button>
                    </div>
                </div>
            )
        }
    }
}