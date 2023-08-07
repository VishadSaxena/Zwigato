// import React from "react";
// import ReactDOM from "react-dom/client";
// import Body from "./components/Body";
// import Header from "./components/Header";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter ([
//   {
//     path : "/",
//     element : <App />, 
//     children : [
//       {
//         path :"/",
//         element: <Body />
//       },
//       {
//         path : "/about",
//         element : <About />
//       },
//       {
//         path : "/contact",
//         element : <Contact />
//       },
//     ],
//     errorElement : < Error/>
//   },
  
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter}/>);

import React, { Suspense } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestMenu from "./components/RestMenu";


const Groceries = lazy( () => import("./components/Groceries"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path : "/",
    element : <App />, 
    children : [
      {
        path :"/",
        element: <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurants/:resId",
        element : <RestMenu />
      },
      {
        path : "/groceries",
        element : <Suspense fallback= {<h1>Loading....</h1>}><Groceries /></Suspense>
      },
    ],
    errorElement : < Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
