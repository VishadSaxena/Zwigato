import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
``

    const [logValue, setLogValue] = useState('Login');
    console.log("useState called");



    return (
      <div className="header">
        <img className="logo"
          alt="Logo"
          src={LOGO_URL}
        ></img>
        <ul className="nav-bar">
          <li> <Link to={"/"}> Home </Link></li>
          <li> <Link to={"/about"}> About Us </Link></li>
          <li><Link to={"/contact"}> Contacts </Link></li>
          <li> Cart</li>
          <button className="btnLogin" onClick={()=>{
                logValue === "Login" ?  setLogValue("Logout") : setLogValue("Login");
                // log_val = "Logout";
                // setLogValue(log_val);
                // console.log(log_val);
          }}>
           {logValue} </button>
        </ul>
      </div>
    );
  };

  export default Header;