import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react';
import ABookingModal from '../ABookingModal/ABookingModal';
import AppointmentOption from './AppointmentOption';
import SmallLoading from '../../Shared/LoadingSpinner/SmallLoading';

const AAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const { data:appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`${ process.env.REACT_APP_API_V2_URL }/appointmentOptions?date=${ date }`)
            const data = await res.json()
            return data
        }
    })
    const appointmentOption = appointmentOptions.data

    if(isLoading) {
        return <SmallLoading />
    }

    return (
        <section className='container mx-auto px-[21px]'>
            <div className='text-center mt-[16px] mb-20 lg:mb-[100px]'>
                <p className='text-[22px] font-normal leading-7 text-theme-2nd'>Available Appointments on { format(selectedDate, 'PP') }</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    appointmentOption?.map(option => (
                        <AppointmentOption 
                            key={ option._id }
                            appointmentOption={ option }
                            setTreatment={ setTreatment }
                        />
                    ))
                }
            </div>
            {
                treatment &&

                <ABookingModal 
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                />
            }
        </section>
    );
};

export default AAppointments;