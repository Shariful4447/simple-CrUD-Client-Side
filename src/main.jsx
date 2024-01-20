import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import Users from './components/Users/Users.jsx';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // children: [
    //   {
    //     path: "Home",
    //     element: <Home/>,
    //   },
    //   {
    //     path: "Login",
    //     element: <Login/>,
    //   },
    // ],
  },
  {
    path: "/users",
    element: <Users/>,
    loader : () =>fetch('http://localhost:3000/users'),
  },
 ]);
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
