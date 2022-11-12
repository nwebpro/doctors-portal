import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-footer-bg bg-center bg-no-repeat bg-cover pt-[74px] pb-[45px]'>
            <div className='container mx-auto px-[21px]'>
                <div className='flex flex-col md:flex-row justify-between gap-10 mb-28'>
                    <div>
                        <h2 className='text-[#939393] text-lg font-bold leading-5 mb-5 uppercase'>Services</h2>
                        <ul className='text-base font-normal leading-5 space-y-[14px]'>
                            <li>Emergency Checkup</li>
                            <li>Monthly Checkup</li>
                            <li>Weekly Checkup</li>
                            <li>Deep Checkup</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#939393] text-lg font-bold leading-5 mb-5 uppercase'>ORAL HEALTH</h2>
                        <ul className='text-base font-normal leading-5 space-y-[14px]'>
                            <li>Fluoride Treatment</li>
                            <li>Cavity Filling</li>
                            <li>Teeth Whitening</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#939393] text-lg font-bold leading-5 mb-5 uppercase'>OUR ADDRESS</h2>
                        <ul className='text-base font-normal leading-5 space-y-[14px]'>
                            <li>New York - 101010 Hudson</li>
                        </ul>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='text-center'>Copyright © 2021 - { new Date().getFullYear() } <Link to='/' className='text-theme-2nd'>Doctors Portal.</Link> All Rights Reserved. Developed By  <a href='https://www.facebook.com/abnaeembsc' className='text-theme-2nd' target={'_blank'} rel="noreferrer">Ab Naeem.</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;