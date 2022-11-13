import { format } from 'date-fns';
import React from 'react';

const ABookingModal = ({ treatment, setTreatment, selectedDate }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking);
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <div className='mb-[23px]'>
                            <input type="text" disabled value={date} className="py-[15px] px-[19px] bg-[#E8F0FE] text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='mb-[23px]'>
                            <select name="slot" className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full">
                                {
                                    slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                            </select>
                        </div>
                        <div className='mb-[23px]'>
                            <input type="text" name="name" placeholder='Your Name' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='mb-[23px]'>
                            <input type="email" name="email" placeholder='Email Address' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='mb-[23px]'>
                            <input type="text" name="phone" placeholder='Phone Number' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='text-center'>
                            <button className='py-[13px] w-full text-base font-normal uppercase text-white rounded-lg bg-gradient-to-r from-theme-2nd to-theme-1st'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ABookingModal;