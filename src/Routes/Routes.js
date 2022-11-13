import { createBrowserRouter } from "react-router-dom";
import FrontEnd from "../Layout/FrontEnd/FrontEnd";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

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
                path: '/Appointment',
                element: <Appointment />
            },
        ]
    }
])