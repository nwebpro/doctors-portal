import React, { useState } from 'react';
import useSetTitle from '../../../Hooks/useSetTitle';
import AAppointments from '../AAppointments/AAppointments';
import AppointmentHero from '../AppointmentHero/AppointmentHero';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    useSetTitle('Appointment')
    return (
        <div className='pb-20 lg:pb-36'>
            <AppointmentHero selectedDate={ selectedDate } setSelectedDate={ setSelectedDate } />
            <AAppointments selectedDate={ selectedDate } />
        </div>
    );
};

export default Appointment;