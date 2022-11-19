import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Header from '../../Pages/Shared/Header/Header'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-0 md:px-6 lg:px-14 py-12 bg-[#F1F5F9]">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label> 
                    <ul className="menu w-80 text-base-content bg-white lg:bg-transparent">
                        <li>
                            <Link to='/dashboard' className='text-xl font-bold text-[#898989] leading-8 hover:bg-[#F1F5F9] hover:text-[#383838] transition-colors duration-200'>Dashboard</Link></li>
                        <li>
                            <NavLink 
                                to='/dashboard/my-appointments'
                                className={({ isActive }) =>
                                    isActive
                                    ? 'bg-[#F1F5F9] text-xl font-bold text-[#383838] leading-8 transition-colors duration-200'
                                    : 'text-xl font-bold text-[#898989] leading-8 hover:bg-[#F1F5F9] hover:text-[#383838] transition-colors duration-200'
                                }
                            >
                                My Appointments
                            </NavLink>    
                        </li>
                        {
                            isAdmin &&
                            <>
                                <li>
                                    <NavLink 
                                        to='/dashboard/all-users' 
                                        className={({ isActive }) =>
                                            isActive
                                            ? 'bg-[#F1F5F9] text-xl font-bold text-[#383838] leading-8 transition-colors duration-200'
                                            : 'text-xl font-bold text-[#898989] leading-8 hover:bg-[#F1F5F9] hover:text-[#383838] transition-colors duration-200'
                                        }
                                    >
                                        All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to='/dashboard/add-doctor'
                                        className={({ isActive }) =>
                                            isActive
                                            ? 'bg-[#F1F5F9] text-xl font-bold text-[#383838] leading-8 transition-colors duration-200'
                                            : 'text-xl font-bold text-[#898989] leading-8 hover:bg-[#F1F5F9] hover:text-[#383838] transition-colors duration-200'
                                        }
                                    >
                                        Add Doctor
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to='/dashboard/manage-doctors'
                                        className={({ isActive }) =>
                                            isActive
                                            ? 'bg-[#F1F5F9] text-xl font-bold text-[#383838] leading-8 transition-colors duration-200'
                                            : 'text-xl font-bold text-[#898989] leading-8 hover:bg-[#F1F5F9] hover:text-[#383838] transition-colors duration-200'
                                        }
                                    >
                                        Manage Doctors
                                    </NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;