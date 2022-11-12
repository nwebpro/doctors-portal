import React from 'react';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className='container mx-auto px-[21px] pb-20 md:pb-28 lg:pb-40'>
            <div className='lg:w-[1057px] mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[102px] items-center'>
                <img src={ treatment } className='rounded-lg' alt="" />
                <div>
                    <h2 className='font-bold text-theme-3rd text-4xl leading-[45px] md:text-5xl lg:leading-[55px] mb-[26px]'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-black text-base leading-[21px] mb-11'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton btnText='GET STARTED' />
                </div>
            </div>
        </div>
    );
};

export default DentalCare;