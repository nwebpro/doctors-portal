import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import FrontEnd from "../Layout/FrontEnd/FrontEnd";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Contact from "../Pages/Contact/Contact";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Review/Reviews";
import AdminRoute from "./AdminRoute";
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
                path: '/about',
                element: <About />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/reviews',
                element: <Reviews />
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
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/my-appointments',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/all-users',
                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                )
            },
            {
                path: '/dashboard/add-doctor',
                element: (
                    <AdminRoute>
                        <AddDoctor />
                    </AdminRoute>
                )
            },
            {
                path: '/dashboard/manage-doctors',
                element: (
                    <AdminRoute>
                        <ManageDoctors />
                    </AdminRoute>
                )
            },
            {
                path: '/dashboard/payment/:bookingId',
                loader: ({ params }) => fetch(`${ process.env.REACT_APP_API_URL }/bookings/${ params.bookingId }`),
                element: <Payment />
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