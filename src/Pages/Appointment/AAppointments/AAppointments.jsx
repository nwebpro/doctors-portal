import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ABookingModal from '../ABookingModal/ABookingModal';
import AppointmentOption from './AppointmentOption';

const AAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='container mx-auto px-[21px]'>
            <div className='text-center mt-[16px] mb-20 lg:mb-[100px]'>
                <p className='text-[22px] font-normal leading-7 text-theme-2nd'>Available Appointments on { format(selectedDate, 'PP') }</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    appointmentOptions.map(option => (
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
                />
            }
        </section>
    );
};

export default AAppointments;