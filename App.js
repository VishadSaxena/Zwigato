import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <img className="logo"
        alt="Logo"
        src="https://static.vecteezy.com/system/resources/previews/011/405/724/original/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg"
      ></img>
      <ul className="nav-bar">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};


const Searchbar = () => {
    return(
        <div className="search-bar">
            <input type="text" className="search-bar"/>

        </div>
    );
};

const RestCard = () => {
    return(
        <div className="rest-card">
            <img className="food-pic" alt="Food Pic" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vcjlhsxo2dcjxhepdnld"></img>
            <h3>Domino's Pizza</h3>
            <h4>4.3 stars</h4>
            <h4>ETA: 25 mins</h4>
            <h4>Cusinies: Indian, Italian, Mexican</h4>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div>
                <Searchbar/>
            </div>
            <div className="rest-container">
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
            </div>  
        </div>
    );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
