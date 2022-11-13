import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div className='bg-white shadow-box-shadow py-[42px] px-20 text-center rounded-[18px]'>
            <h3 className='font-semibold text-lg leading-7 mb-2 text-theme-2nd'>{ name }</h3>
            <p className='text-black text-sm leading-5 font-normal mb-3'>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
            <p className='text-black text-sm leading-5 font-normal mb-[15px]'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            <label
                disabled={ slots.length === 0 }
                htmlFor="booking-modal"
                className="btn border-none bg-gradient-to-r from-theme-2nd to-theme-1st py-4 px-6 rounded-lg inline-block text-white font-bold text-sm uppercase leading-5 cursor-pointer"
                onClick={() => setTreatment(appointmentOption)}
            >Book Appointment</label>
        </div>
    );
};

export default AppointmentOption;