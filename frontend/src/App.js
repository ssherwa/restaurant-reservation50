import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Register from "./components/register/Register.js";
import ReserveTable from "./components/ReserveTable/ReserveTable";
import Sorry from "./components/sorry/Sorry";
import Confirmation from "./components/confirmation/Confirmation";
import GuestRegister from "./components/guestRegister/GuestRegister";
import Hold from "./components/Hold/Hold";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header"> */}
          {/* <Navbar /> */}

          <Routes>
            <Route  path="/" exact={true} element={<Navbar/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/bookings" exact={true} element={<ReserveTable/>} />
            <Route path="/sorry" element={<Sorry/>} />
            <Route path="/confirmation" element={<Confirmation/>} />
            <Route path="/guestregister" element={<GuestRegister/>} />
            <Route path="/hold" element={<Hold/>} />
            {/* <Route path="/booking" exact={true} element={<ReserveTable/>} /> */}
          </Routes>
        {/* </header>
      </div> */}
    </Router>
  );
}

export default App;
