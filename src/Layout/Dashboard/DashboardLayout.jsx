import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
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
                <div className="drawer-content px-0 md:px-6 lg:px-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/my-appointments'>My Appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/all-users'>All Users</Link></li>
                                <li><Link to='/dashboard/add-doctor'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/manage-doctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;