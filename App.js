import React from "react";
import  ReactDOM from "react-dom/client";

const App = () =>  (
        <div>
            <h1>Rendering starts</h1>
        </div>
    );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);