import React from 'react';
import useSetTitle from '../../../Hooks/useSetTitle';
import DentalCare from '../DentalCare/DentalCare';
import Hero from '../Hero/Hero/Hero';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OpeningBoxs from '../OpeningBox/OpeningBoxs';
import Services from '../Services/Services';
import StayConnected from '../StayConnected/StayConnected';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    useSetTitle('Home')
    return (
        <>
            <Hero />
            <OpeningBoxs />
            <Services />
            <DentalCare />
            <MakeAppointment />
            <Testimonials />
            <StayConnected />
        </>
    );
};

export default Home;