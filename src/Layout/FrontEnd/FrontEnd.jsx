import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const FrontEnd = () => {
    return (
        <>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </>
    );
};

export default FrontEnd;