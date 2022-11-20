import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const { data } = useLoaderData()
    const { appointmentDate, treatment, price, slot } = data
    
    return (
        <section className='flex items-center h-96'>
            <div className='max-w-2xl bg-white py-10 px-8 rounded-lg mx-auto'>
                <h2 className='text-center mb-3 font-bold text-2xl'>Payment for { treatment }</h2>
                <p className='text-center text-base text-theme-3rd'>Please pay <span className='font-bold'>${ price }</span> for your appointment on <span className='font-bold'>{ appointmentDate }</span> at <span className='font-bold'>{ slot }</span></p>
                <div className='mt-[30px]'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={ data } />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;