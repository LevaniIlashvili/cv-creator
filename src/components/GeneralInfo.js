import React, { setState, useState } from "react";
import "../styles/generalinfo.css";

export default function GeneralInfo() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSubmitted, setSubmitted] = useState(false);

    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const lastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const phoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    } 

    const submit = () => {
        setSubmitted(true);
    }

    const edit = () => {
        setSubmitted(false);
    }
    
    if(!isSubmitted) {
        return (
            <div className="general-information">
                <h3>General Information</h3>
                <input placeholder="First name" onChange={firstNameChange} value={firstName} />
                <input placeholder="Last name" onChange={lastNameChange} value={lastName} />
                <input type="email" placeholder="Email" onChange={emailChange} value={email} />
                <input placeholder="Phone number" onChange={phoneNumberChange} value={phoneNumber} />
                <div className="btn-container">
                    <button onClick={submit} >Add</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="general-information">
                <div className="info-flex">
                    <h4>First name:</h4>
                    <p>{firstName}</p>
                </div>
                <div className="info-flex">
                    <h4>Last name:</h4>
                    <p>{lastName}</p>
                </div>
                <div className="info-flex">
                    <h4>Email:</h4>
                    <p>{email}</p>
                </div>
                <div className="info-flex">
                    <h4>Phone number:</h4>
                    <p>{phoneNumber}</p>
                </div>
                <button onClick={edit}>Edit</button>
            </div>
        )
    }
}