import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
``

    const [logValue, setLogValue] = useState('Login');
    const onlineStatus = useOnlineStatus();


    return (
      <div className="header">
          <img className="logo"
            alt="Logo"
            src={LOGO_URL}
          ></img>
        <ul className="nav-bar">
          <li> Status: {(onlineStatus) ? " 🟢 ": " 🔴 " }</li>
          <li> <Link to={"/"}> Home </Link></li>
          <li> <Link to={"/about"}> About Us </Link></li>
          <li><Link to={"/contact"}> Contacts </Link></li>
          <li><Link to={"/groceries"}> Groceries </Link></li>
          <li> Cart</li>
          <button className="btnLogin" onClick={()=>{
                logValue === "Login" ?  setLogValue("Logout") : setLogValue("Login");
          }}>
           {logValue} </button>
        </ul>
      </div>
    );
  };

  export default Header;