import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './signin.css';
import food from './pexels-photo-1565982.jpeg';


const Signin = () => {
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
    
      const handleClick = async (e) => {
          console.log("outside try");
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        
        try {
            console.log("inside try");
            const res = await axios.post("http://localhost:4000/auth/login", credentials);

            console.log("res == ", res.data);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            

            // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

            navigate("/bookings")

            // console.log("user ", user);

        } catch (err) {
              dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };


      return (
        <div className="login" style={{
            backgroundImage: 'url('+food+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
          }}>
                   <h1 className="sagawala-eatery">
          SAGAWALA EATERY
        </h1> 
        <h1 className="log">
          Login
        </h1> 
        
          <div className="lContainer">
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
            <button disabled={loading} onClick={handleClick} className="lButton">
              Login
            </button>
            {error && <span>{error.message}</span>}
          </div>
        </div>
      );


        // return (
            // <div className="signinpage">
            //     {/* Create a sign in page that asks user for name and password. and create a submit button */}
            //     <div className="signin">
            //         <h1>Sign In</h1>
            //         <form action="/auth/login" method="POST">
            //             <div className="form-group">
            //                 <label for="exampleInputEmail1">User Name</label>
            //                 <input type="username" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter username" />
            //                 {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            //                 </div>
            //                 <div className="form-group">
            //                 <label for="exampleInputPassword1">Password</label>
            //                 <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            //                 </div>
                            
            //                 <button type="submit" className="btn btn-primary">Submit</button>
            //         </form>

            //         </div>

            // </div>
        // );
    }

export default Signin;