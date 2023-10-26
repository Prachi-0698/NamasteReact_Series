import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
// CreateBrowserRouter will create a routing config
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";






const App = () =>{
    return(
        <>
         <Header />
         <Outlet />
        </>
)};

// Routing config

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resid",
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);