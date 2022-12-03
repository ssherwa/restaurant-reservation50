import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";
import food from './pexels-photo-1565982.jpeg';


const Navbar = () => {

    const {user} = useContext(AuthContext);

  return (
    <div className="navbar" style={{
        backgroundImage: 'url('+food+')',
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}>
               <h1 className="sagawala-eatery">
      SAGAWALA EATERY
    </h1>  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div id="navMainMenu" className="navbar-collapse">
                <div className="navbar-nav ml-auto">
                {user ? (
                    <Link to="/signin" className="nav-item nav-link active">Welcome {user.username}</Link>
                ) : (
                        
                    <Link to='/signin' className="nav-item nav-link active">Sign In</Link>
                )}
                        
                    <Link to='/guestregister' className="nav-item nav-link">Register</Link>

                    <Link to='/bookings' className="nav-item nav-link">Continue as Guest</Link>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
