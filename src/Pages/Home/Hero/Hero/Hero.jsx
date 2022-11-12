import React from 'react';
import herobg from '../../../../assets/images/bg.png'
import chair from '../../../../assets/images/chair.png'
import PrimaryButton from '../../../../component/PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <section className="relative container mx-auto -z-1">
            <img
                src={ herobg }
                className="absolute inset-0 object-cover w-full h-full hidden lg:block"
                alt=""
            />
            <div className="relative px-[21px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pt-12 pb-20 lg:pt-52 lg:pb-60">
                    <div className='lg:pl-[52px] order-2 lg:order-1'>
                        <h2 className='text-theme-3rd font-bold text-4xl leading-[50px] lg:text-5xl lg:leading-[65px] mb-[14px]'>Your New Smile Starts Here</h2>
                        <p className='font-normal text-theme-3rd text-base leading-[21px] mb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton btnText='GET STARTED' />
                    </div>
                    <div className='lg:pr-[38px] order-1 lg:order-2'>
                        <img src={ chair } alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;