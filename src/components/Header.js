import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    );
  };

  export default Header;