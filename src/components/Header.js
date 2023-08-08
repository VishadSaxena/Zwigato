import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
``

    const [logValue, setLogValue] = useState('Login');
    const onlineStatus = useOnlineStatus();


    return (
      <div className="flex justify-between bg-orange-100 mb-4 shadow-lg">
          <img className="w-12"
            alt="Logo"
            src={LOGO_URL}
          ></img>
        <ul className="flex p-4 m-4 align-middle">
          <li className="px-4"> Status: {(onlineStatus) ? " 🟢 ": " 🔴 " }</li>
          <li className="px-4"> <Link to={"/"}> Home </Link></li>
          <li className="px-4"> <Link to={"/about"}> About Us </Link></li>
          <li className="px-4"><Link to={"/contact"}> Contacts </Link></li>
          <li className="px-4"><Link to={"/groceries"}> Groceries </Link></li>
          <li className="px-4"> Cart</li>
          <button className="px-4 rounded-lg bg-orange-200 align-middle  hover:bg-orange-300" onClick={()=>{
                logValue === "Login" ?  setLogValue("Logout") : setLogValue("Login");
          }}>
           {logValue} </button>
        </ul>
      </div>
    );
  };

  export default Header;