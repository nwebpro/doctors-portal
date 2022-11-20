import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import SmallLoading from '../../Shared/LoadingSpinner/SmallLoading';
import AppointmentItem from './AppointmentItem';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const url = `${ process.env.REACT_APP_API_URL }/bookings?email=${ user?.email }`

    const {data:bookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${ localStorage.getItem('doctorsPortalAccessToken') }`
                }
            })
            const data = await res.json()
            return data
        }
    })
    const booking = bookings.data

    if(isLoading) {
        return <SmallLoading />
    }

    return (
        <div className="overflow-x-auto">
            <h1 className='text-2xl font-bold text-black mb-[30px]'>My Appointment</h1>
            <table className="table w-full">
                <thead>
                    <tr className='text-center'>
                        <th className='bg-theme-2nd text-white'>SL</th>
                        <th className='bg-theme-2nd text-white'>Name</th>
                        <th className='bg-theme-2nd text-white'>Service</th>
                        <th className='bg-theme-2nd text-white'>Time</th>
                        <th className='bg-theme-2nd text-white'>Date</th>
                        <th className='bg-theme-2nd text-white'>Price</th>
                        <th className='bg-theme-2nd text-white'>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booking?.map((book, index) => (
                            <AppointmentItem key={book._id} book={book} index={index} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;