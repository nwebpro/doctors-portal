import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

const AppointmentHero = ({ selectedDate, setSelectedDate }) => {
    return (
        <section className='bg-ahero bg-center bg-no-repeat bg-cover pt-12 pb-20 lg:pt-52 lg:pb-60'>
            <div className='container mx-auto px-[21px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='order-2 lg:order-1'>
                        <div className='lg:w-[350px] mx-auto bg-white rounded-[18px] p-5 shadow-box-shadow'>
                            <DayPicker 
                                mode='single'
                                selected={ selectedDate }
                                onSelect={ setSelectedDate }
                            />
                        </div>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <img src={ chair } alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHero;