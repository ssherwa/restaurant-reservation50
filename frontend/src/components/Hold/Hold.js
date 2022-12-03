import React from "react";
import { Link } from "react-router-dom";
import "./hold.css";


const Hold = () => {
    return (
        <div className="rectangle-18">
        <div className="hold-box">
             <h1 className="a-hold-fee-is-requir helvetica-regular-normal-black-57px">
                A hold fee is required
                <br />
                for this specific day
                <br />
                &amp;
                <br />
                No show will be charged
                <br />
                Minimun $10
                </h1>
            <Link to="/">
            <button className="home-button">Home Page </button>
            </Link>
        </div>
        </div>
    );
    }

export default Hold;
