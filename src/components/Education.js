import React, { Component } from "react";
import "../styles/education.css";

export default class Education extends Component {
    constructor() {
        super();

        this.state = {
            form: "begining",
            university: "",
            titleOfStudy: "",
            from: "",
            to: ""
        }
    }

    showInputs = () => {
        this.setState({
            form: "editing"
        });
    }

    submit = () => {
        this.setState({
            form: "submitted",
        })
    }

    universityChange = (e) => {
        this.setState({
            university: e.target.value
        })
        console.log(this.state.university)
    }

    titleOfStudyChange = (e) => {
        this.setState({
            titleOfStudy: e.target.value
        })
    }

    dateFromChange = (e) => {
        this.setState({
            from: e.target.value
        })
    }

    dateToChange = (e) => {
        this.setState({
            to: e.target.value
        })
    }

    edit = () => {
        this.setState({
            form: "editing"
        })
    }

    delete = () => {
        this.setState({
            form: "begining"
        })
    }

    render() {
        if (this.state.form === "submitted") {
            return (
                <div className="education">
                    <div className="info-flex">
                        <h4>University:</h4>
                        <p>{this.state.university}</p>
                    </div>
                    <div className="info-flex">
                        <h4>Title of study:</h4>
                        <p>{this.state.titleOfStudy}</p>
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
        } else if (this.state.form === "editing") {
            return (
                <div className="education">
                    <h3>Education</h3>
                    <input placeholder="University name" value={this.state.university} onChange={this.universityChange} />
                    <input placeholder="title of study" value={this.state.titleOfStudy} onChange={this.titleOfStudyChange} />
                    <div className="date-div">
                        <p>From:</p>
                        <input type="date" value={this.state.from} onChange={this.dateFromChange} />
                    </div>
                    <div className="date-div">
                        <p>To:</p>
                        <input type="date" value={this.state.to} onChange={this.dateToChange} />
                    </div>
                    <div className="btn-container">
                        <button onClick={this.submit} >Add</button>
                        <button onClick={this.delete} >Delete</button>
                    </div>
                </div>
            )
        } else if (this.state.form === "begining") {
            return (
                <div className="education">
                    <h3>Education</h3>
                    <div className="btn-container">
                        <button onClick={this.showInputs} >Add</button>
                    </div>
                </div>
            )
        }
    }
}