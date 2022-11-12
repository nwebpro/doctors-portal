import React from 'react';

const Service = ({ service }) => {
    const { name, description , img } = service;
    return (
        <div className="shadow-box-shadow rounded-[18px] flex flex-col items-center py-11 px-[56px]">
            <img src={ img } alt="" className="rounded-xl mb-[34px]" />
            <div className="text-center">
                <h2 className="font-semibold text-xl leading-7 mb-2 text-theme-3rd">{name}</h2>
                <p className='text-[#000] text-base font-normal leading-5'>{description}</p>
            </div>
        </div>
    );
};

export default Service;