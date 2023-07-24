import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path : "/",
    element : <App />,
    errorElement : < Error/>
  },
  {
    path : "/about",
    element : <About />
  },
  {
    path : "/contact",
    element : <Contact />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
