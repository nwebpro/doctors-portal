import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header'

const DashboardLayout = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile bg-gray-100">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-0 md:px-6 lg:px-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content bg-gray-400">
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;