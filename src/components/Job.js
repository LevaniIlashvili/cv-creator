import React, { useState } from "react";
import "../styles/job.css";

export default function Job() {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [from, setDateFrom] = useState("");
    const [to, setDateTo] = useState("");
    const [jobForm, setjobForm] = useState("begining");

    const companyNameChange = (e) => {
        setCompanyName(e.target.value);
    }

    const positionTitleChange = (e) => {
        setPositionTitle(e.target.value);
    }

    const dateFromChange = (e) => {
        setDateFrom(e.target.value);
    }

    const dateToChange = (e) => {
        setDateTo(e.target.value);
    }

    const add = () => {
        setjobForm("submitted");
    }

    const showInputs = () => {
        setjobForm("editing");
    }

    const edit = () => {
        setjobForm("editing");
    }

    const deleteBtn = () => {
        setjobForm("begining");
    }


    if (jobForm === "begining") {
        return (
            <div>
                <h3>Work experience</h3>
                <div className="btn-container">
                    <button onClick={showInputs} >Add</button>
                </div>
            </div>
        )
    } else if (jobForm === "editing") {
        return (
            <div className="job">
                <input placeholder="Company name" value={companyName} onChange={companyNameChange} />
                <input placeholder="Position title" value={positionTitle} onChange={positionTitleChange} />
                <div className="date-div">
                    <p>From:</p>
                    <input type="date" value={from} onChange={dateFromChange} />
                </div>
                <div className="date-div">
                    <p>To:</p>
                    <input type="date" value={to} onChange={dateToChange} />
                </div>
                <div className="btn-container">
                    <button onClick={add} >Add</button>
                    <button onClick={deleteBtn} >Delete</button>
                </div>
            </div>
        )
    } else if (jobForm === "submitted") {
        return (
            <div className="job">
                <div className="info-flex">
                    <h4>Company name:</h4>
                    <p>{companyName}</p>
                </div>
                <div className="info-flex">
                    <h4>Position title:</h4>
                    <p>{positionTitle}</p>
                </div>
                <div className="info-flex">
                    <h4>From:</h4>
                    <p>{from}</p>
                </div>
                <div className="info-flex">
                    <h4>To:</h4>
                    <p>{to}</p>
                </div>
                <div className="btn-container">
                    <button onClick={edit} >Edit</button>
                    <button onClick={deleteBtn} >Delete</button>
                </div>
            </div>
        )
    }
}