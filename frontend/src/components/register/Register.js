import React, {useEffect, useState} from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import "./register.css";
 
// import './login.css';






const Register = () => {
    useEffect(() => {
        // return navigation.addListener("focus", () => {
            // });
            fetchItems();
        
    }, []);



    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/tables');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div className='table'>
        {  
            items.map(item => (
                <p>{`${item.tableNumber} | ${item.tableStatus}`} </p>
            ))
        }
        </div>
    );
}


export default Register;