import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './reserveTable.css';
import food from './pexels-photo-1565982.jpeg';
// import { AuthContext } from "../../context/AuthContext";

// This is the component for the reserve table page. It is a form that allows the user to reserve a table. The user need to enter name, email, phone, number of guests, choose from a date and time then click submit.


const ReserveTable = () => {

    const {user} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        name: undefined,
        email: undefined,
        phone: undefined,
        guests: undefined,
        date: undefined,
        time: undefined,
      });
    
      const { loading, error, dispatch } = useContext(AuthContext);
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        //   post the data to the backend
            e.preventDefault();
            // dispatch({ type: "LOGIN_START" });

            try {
                console.log("inside try reserve");
                const res = await axios.post("http://localhost:4000/bookings", credentials
                );
                console.log("res,,, ", res);
                
                // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
                
                navigate("/confirmation")
            } catch (err) {
                console.log("error caught");
                // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
                navigate("/sorry")                   
            }
        };

    return (
        <div className="reserveTable" style={{
            backgroundImage: 'url('+food+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
          }}>
          <h1 className="sagawala-eatery">
      SAGAWALA EATERY
    </h1>  
            <div className="rContainer">
                {/* if user then show user name or show welcome guest*/}

                {user ? <h1 className="title">Welcome {user.username} </h1> : <h1 className="title">Welcome Guest!</h1>}
                <input
                    type="text"
                    placeholder="name"
                    id="Name"
                    onChange={handleChange}
                    className="rInput"
                />  
                <input
                    type="text"
                    placeholder="email"
                    id="Email"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="text"
                    placeholder="phone"
                    id="Phone"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="number"
                    min={1}
                    placeholder="guests"
                    id="NumberOfPeople"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="date"
                    placeholder="date"
                    id="Date"
                    onChange={handleChange}
                    className="rDate"
                />
                <input
                    type="time"
                    placeholder="time"
                    id="Time"
                    onChange={handleChange}
                    className="rTime"
                />
                <button className="rButton" onClick={handleClick}>Submit</button>
                
            </div>
        </div>
    )
}

export default ReserveTable
