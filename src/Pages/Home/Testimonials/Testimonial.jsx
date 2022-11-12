import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, review: userReview, location } = review
    return (
        <div className='shadow-box-shadow rounded-[18px] px-8 py-9'>
            <p className='mb-[38px] text-base leading-[21px] text-black'>{ userReview }</p>
            <div className='flex gap-[14px] items-center'>
                <img className='w-[75px] rounded-full ring ring-theme-2nd ring-offset-2' src={ img } alt="" />
                <div>
                    <h3>{ name }</h3>
                    <p>{ location }</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;