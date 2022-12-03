import React from "react";
import { Link } from "react-router-dom";
import "./sorry.css";

//this page displays a box with sorry message and a button to go back to the reserve table page

const Sorry = () => {
    return (
        <div className="rectangle-18">
        <div className="hold-box">
             <h1 className="a-hold-fee-is-requir helvetica-regular-normal-black-57px">
                Your desired time is not available
              
                
                Please try a different time
               
                </h1>
            <Link to="/bookings">
            <button className="home-button">Book Again </button>
            </Link>
        </div>
        </div>
    );
    }

export default Sorry;
