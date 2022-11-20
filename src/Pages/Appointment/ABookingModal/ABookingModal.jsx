import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
import SmallSpinner from '../../../component/Spinner/SmallSpinner';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ABookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name: treatmentName, slots, price } = treatment
    const date = format(selectedDate, 'PP')
    const { user, loading, setLoading } = useContext(AuthContext)

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            price,
            email,
            phone,
        }

        fetch(`${ process.env.REACT_APP_API_URL }/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            setTreatment(null)
            if(data.success){
                toast.success('Booking confirmed', { autoClose: 400 })
                setLoading(false)
                refetch()
            }else {
                toast.error(data.message)
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
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
                            <input type="text" name="name" defaultValue={user?.displayName} disabled placeholder='Your Name' className="py-[15px] px-[19px] bg-[#E8F0FE] text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full" required />
                        </div>
                        <div className='mb-[23px]'>
                            <input type="email" name="email" defaultValue={user?.email} disabled placeholder='Email Address' className="py-[15px] px-[19px] bg-[#E8F0FE] text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full" required />
                        </div>
                        <div className='mb-[23px]'>
                            <input type="text" name="phone" placeholder='Phone Number' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full" required />
                        </div>
                        <div className='text-center'>
                            {
                                user?.uid ?
                                <PrimaryButton classes={'w-full block uppercase'} btnText={loading ? <SmallSpinner /> : 'Submit' } />
                                :
                                <Link to='/login' className='block py-[13px] w-full text-base font-normal uppercase text-white rounded-lg bg-gradient-to-r from-theme-2nd to-theme-1st'>Login Please</Link>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ABookingModal;