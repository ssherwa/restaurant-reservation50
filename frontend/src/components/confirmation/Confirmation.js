import React from "react";
import { Link } from "react-router-dom";
import "./confirmation.css";



const Confirmation = () => {
    return (
        // <div className="confirmation">
        <div className="rectangle-18">
            <h1>Congrats!</h1>
            <p>Your booking was successfull</p>
            <p>Please continue.</p>
            <Link to="/hold">
            <button className="confirmation-button">Continue</button>
            </Link>
        </div>
        // </div>
    );
    }

export default Confirmation;