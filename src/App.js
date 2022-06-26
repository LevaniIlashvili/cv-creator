import React, { Component } from "react";
import GeneralInfo from './components/GeneralInfo';
import "./styles/app.css";
import Education from "./components/Education";
import Job from "./components/Job";

export default class App extends Component {
    render() {
        return(
            <div className="container">
                <div className="cv">
                    <GeneralInfo />
                    <Education />
                    <Job />
                </div>
            </div>
        )
    }
}
