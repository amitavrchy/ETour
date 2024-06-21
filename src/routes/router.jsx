import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Home from '../pages/Home/Home'
import Signup from '../pages/SignUp/Signup'
import Login from '../pages/Login/Login'
import TouristSpotDetails from '../pages/Home/TouristSpotDetails'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/tourist-spot/:id",
                element: <TouristSpotDetails></TouristSpotDetails>
            }
        ]
    }
])

export default router