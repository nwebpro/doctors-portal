import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import OpeningBox from './OpeningBox';

const OpeningBoxs = () => {
    const openingBoxData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-theme-2nd to-theme-1st rounded-[14px]'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-theme-3rd rounded-[14px]'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-theme-2nd to-theme-1st rounded-[14px]'
        },
    ]

    return (
        <section className='container mx-auto px-[21px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    openingBoxData.map(card => (
                        <OpeningBox key={ card.id } card={ card } />
                    ))
                }
            </div>
        </section>
    );
};

export default OpeningBoxs;