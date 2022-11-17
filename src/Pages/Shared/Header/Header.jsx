import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, userLogout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleUserLogout = () => {
        userLogout()
        .then(() => {
            navigate('/')
            toast.warning('User Logout Successfully!', { autoClose: 400 })
        })
        .catch(error => {
            toast.error(error.message, { autoClose: 400 })
        })
    }
    const menuItems = 
    <>
        <li>
            <Link
            to="/home"
            aria-label="Home"
            title="Home"
            className="font-normal font-base leading-[21px] tracking-wide text-black transition-colors duration-200"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
            to="/about"
            aria-label="About"
            title="About"
            className="font-normal tracking-wide text-black transition-colors duration-200 font-base leading-[21px]"
            >
                About
            </Link>
        </li>
        <li>
            <Link
            to="/appointment"
            aria-label="Appointment"
            title="Appointment"
            className="font-normal tracking-wide text-black transition-colors duration-200 font-base leading-[21px]"
            >
                Appointment
            </Link>
        </li>
        <li>
            <Link
            to="/reviews"
            aria-label="Reviews"
            title="Reviews"
            className="font-normal tracking-wide text-black transition-colors duration-200 font-base leading-[21px]"
            >
                Reviews
            </Link>
        </li>
        <li>
            <Link
            to="/contact"
            aria-label="Contact Us"
            title="Contact Us"
            className="font-normal tracking-wide text-black transition-colors duration-200 font-base leading-[21px]"
            >
                Contact Us
            </Link>
        </li>
        {
            user?.uid ?
            <>
                <li>
                    <Link
                    to="/dashboard"
                    aria-label="Dashboard"
                    title="Dashboard"
                    className="font-normal tracking-wide text-black transition-colors duration-200 font-base leading-[21px]"
                    >
                        Dashboard
                    </Link>
                </li>
                <li onClick={ handleUserLogout }>
                    <button>Logout</button>
                </li>
            </>
            :
            <li>
                <Link
                to="/login"
                aria-label="Login"
                title="Login"
                className="font-normal tracking-wide text-black transition-colors duration-200 font-base leading-[21px]"
                >
                    Login
                </Link>
            </li>
        }
    </>
    return (
        <header className="h-16 py-4">
            <div className='container mx-auto px-10 md:px-14 lg:pl-[100px] lg:pr-[89px]'>
                <div className="relative flex items-center justify-between">
                    <div className='lg:hidden'>
                        <label htmlFor="dashboardDrawer" className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link
                    to="/"
                    aria-label="Doctors Portal"
                    title="Doctors Portal"
                    className="inline-flex items-center"
                    >
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Doctors Portal
                    </span>
                    </Link>
                    <ul className="items-center hidden space-x-8 lg:flex">
                        { menuItems }
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                        to="/"
                                        aria-label="Doctors Portal"
                                        title="Doctors Portal"
                                        className="inline-flex items-center"
                                        >
                                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                            Doctors Portal
                                        </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                        >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                            <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                        </button>
                                    </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            { menuItems }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;