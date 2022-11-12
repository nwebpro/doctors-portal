import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='container mx-auto px-[21px] mb-20 lg:mb-[149px]'>
            <div className='flex justify-between items-center mb-20'>
                <div>
                    <h4 className='text-theme-2nd font-bold text-xl leading-[22px] mb-[22px]'>Appointment</h4>
                    <h2 className="text-4xl text-theme-3rd leading-[41px] font-normal">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testimonialData.map(review => (
                        <Testimonial key={ review.id } review={ review } />
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonials;