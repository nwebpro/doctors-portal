import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentItem = ({ book, index }) => {
    const { _id, patient, slot, treatment, appointmentDate, price, paid } = book
    return (
        <tr className='text-center'>
            <th>{ index + 1 }</th>
            <td>{ patient }</td>
            <td>{ treatment }</td>
            <td>{ slot }</td>
            <td>{ appointmentDate }</td>
            <td>${ price }</td>
            <td>
                {
                    price && !paid &&
                    <Link to={`/dashboard/payment/${ _id }`}>
                        <button className='text-sm bg-theme-2nd py-2 px-3 rounded text-white'>Pay</button>
                    </Link>
                }
                {
                    price && paid &&
                    <span className='text-sm cursor-not-allowed py-2 px-3  rounded bg-green-100 font-medium text-green-700'>Paid</span>
                }
            </td>
        </tr>
    );
};

export default AppointmentItem;