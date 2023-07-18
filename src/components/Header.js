import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    let log_val = "";

    const [logValue, setLogValue] = useState('Login');

    return (
      <div className="header">
        <img className="logo"
          alt="Logo"
          src={LOGO_URL}
        ></img>
        <ul className="nav-bar">
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
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