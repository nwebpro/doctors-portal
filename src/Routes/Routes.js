import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import FrontEnd from "../Layout/FrontEnd/FrontEnd";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Contact from "../Pages/Contact/Contact";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <FrontEnd />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/contact',
                element: <Contact />
            }
            
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])