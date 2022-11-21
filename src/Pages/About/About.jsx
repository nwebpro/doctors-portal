import React from 'react';
import DentalCare from '../Home/DentalCare/DentalCare';
import OpeningBoxs from '../Home/OpeningBox/OpeningBoxs';
import Testimonials from '../Home/Testimonials/Testimonials';

const About = () => {
    return (
        <div className='pt-20'>
            <DentalCare />
            <div className='pb-20 md:pb-28 lg:pb-40'>
                <OpeningBoxs />
            </div>
            <Testimonials />
        </div>
    );
};

export default About;