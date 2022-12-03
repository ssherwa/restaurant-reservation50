import React from "react";
import { Link } from "react-router-dom";
import "./guestRegister.css";
import  {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import food from './pexels-photo-1565982.jpeg';

    
    const GuestRegister = () => {

        const [credentials, setCredentials] = useState({
            username: undefined,
            password: undefined,
        });
    
        const { loading, error, dispatch } = useContext(AuthContext);
    
        const navigate = useNavigate()
    
    const handleChange = (e) => {
        console.log(e.target);
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    //     const { id, value } = e.target;
    //     setCredentials((prev) => ({ ...prev, [id]: value }));

    // };


    var checkedBilling = false;

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        
        try {
            console.log("inside try here");
            console.log("credentials here", credentials);
            // if checkedBilling is true, then send the same address for billing and mailing

            console.log("checkedBilling", checkedBilling);


            const res = await axios.post("http://localhost:4000/auth/register", credentials);

            console.log("res", res);

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    
            // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    
            navigate("/bookings")
            // console.log("user ", user);
    
        } catch (err) {
                // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
        };

        const changeCheckbox = (e) => {
            // console.log("e", e);
            // console.log("checkedBillingr", checkedBilling);
            checkedBilling = true
        
            document.getElementById("billingaddress").disabled = e.target.checked;
            document.getElementById('billingaddress').value = document.getElementById('mailingaddress').value
            //set billing address to mailing address and send to backend

        }


        return (
            <div className="register" style={{
                backgroundImage: 'url('+food+')',
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5"
              }}>
                       <h1 className="sagawala-eatery">
              SAGAWALA EATERY
            </h1>  
            <div className="rContainer">
            <h1 className="title">
      Login/Sign-in
    </h1>
              <input
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
                className="rInput"
              />
              <input
                type="text"
                placeholder="email"
                id="email"
                onChange={handleChange}
                className="rInput"
                />
              <input
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
                className="rInput"
              />
                <input
                type="text"
                placeholder="mailing address"
                id="mailingaddress"
                onChange={handleChange}
                className="rInput"
                />
                <input
                type="text"
                placeholder="billing address"
                id="billingaddress"
                onChange={handleChange}
                className="rInput"
                />
                
                <input type="checkbox" id="sameasmailing" name="sameasmailing" value="sameasmailing" onChange={changeCheckbox}/>
                 <label for="sameasmailing"> Same as mailing address</label>


               
              
                <select
                placeholder="payment method"
                id="paymentmethod"
                onChange={handleChange}
                className="rSelect">
                
                <option value="cash">Cash</option>
                <option value="credit">Credit</option>
                <option value="check">Check</option>
               
                </select>

              <button disabled={loading} onClick={handleClick} className="rButton" type="submit">
                Register
              </button>
              {error && <span>{error.message}</span>}
            </div>
        </div>
    );
    }

export default GuestRegister;