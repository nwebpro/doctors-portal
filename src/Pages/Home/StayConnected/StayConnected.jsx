import React from 'react';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const StayConnected = () => {
    return (
        <section className='bg-appointment-bg bg-center bg-no-repeat bg-cover pt-16 pb-[71px]'>
            <div className='container mx-auto px-[21px]'>
                <div className='lg:w-[450px] mx-auto'>
                    <div className='text-center mb-10'>
                        <h4 className='text-theme-2nd font-bold text-xl leading-[22px] mb-[22px]'>Appointment</h4>
                        <h2 className="text-4xl text-white leading-[41px] font-normal">What Our Patients Says</h2>
                    </div>
                    <form>
                        <div className='mb-5'>
                            <input type="email" name="email" placeholder='Email Address' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='mb-5'>
                            <input type="text" name="subject" placeholder='Subject' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='mb-9'>
                        <textarea name="message" rows="7" className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" placeholder="Your message"></textarea>
                        </div>
                        <div className='text-center'>
                            <PrimaryButton btnText='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default StayConnected;