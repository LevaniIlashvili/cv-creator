import React, { useState } from "react";
import "../styles/education.css";

export default function Education() {
    const [form, setFormState] = useState("begining");
    const [university, setUniversity] = useState("");
    const [titleOfStudy, setTitleOfStudy] = useState("");
    const [from, setDateFrom] = useState("");
    const [to, setDateTo] = useState("");

    const showInputs = () => {
        setFormState("editing");
    }

    const submit = () => {
        setFormState("submitted");
    }

    const universityChange = (e) => {
        setUniversity(e.target.value);
    }

    const titleOfStudyChange = (e) => {
        setTitleOfStudy(e.target.value);
    }

    const dateFromChange = (e) => {
        setDateFrom(e.target.value);
    }

    const dateToChange = (e) => {
        setDateTo(e.target.value);
    }

    const edit = () => {
        setFormState("editing");
    }

    const deleteBtn = () => {
        setFormState("begining");
    }

    if (form === "submitted") {
        return (
            <div className="education">
                <div className="info-flex">
                    <h4>University:</h4>
                    <p>{university}</p>
                </div>
                <div className="info-flex">
                    <h4>Title of study:</h4>
                    <p>{titleOfStudy}</p>
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
    } else if (form === "editing") {
        return (
            <div className="education">
                <h3>Education</h3>
                <input placeholder="University name" value={university} onChange={universityChange} />
                <input placeholder="title of study" value={titleOfStudy} onChange={titleOfStudyChange} />
                <div className="date-div">
                    <p>From:</p>
                    <input type="date" value={from} onChange={dateFromChange} />
                </div>
                <div className="date-div">
                    <p>To:</p>
                    <input type="date" value={to} onChange={dateToChange} />
                </div>
                <div className="btn-container">
                    <button onClick={submit} >Add</button>
                    <button onClick={deleteBtn} >Delete</button>
                </div>
            </div>
        )
    } else if (form === "begining") {
        return (
            <div className="education">
                <h3>Education</h3>
                <div className="btn-container">
                    <button onClick={showInputs} >Add</button>
                </div>
            </div>
        )
    }
}