import React from 'react';

const AppointmentItem = ({ book, index }) => {
    const { patient, slot, treatment, appointmentDate, phone } = book
    return (
        <tr>
            <th>{ index + 1 }</th>
            <td>{ patient }</td>
            <td>{ treatment }</td>
            <td>{ slot }</td>
            <td>{ appointmentDate }</td>
            <td>{ phone }</td>
        </tr>
    );
};

export default AppointmentItem;