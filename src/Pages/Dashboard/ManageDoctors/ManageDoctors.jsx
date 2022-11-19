import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import SmallLoading from '../../Shared/LoadingSpinner/SmallLoading';

const ManageDoctors = () => {
    const [deletedDoctor, setDeletedDoctor] = useState(null)
    const {data:doctors = [], isLoading, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch(`${ process.env.REACT_APP_API_URL }/doctors`)
            const data = await res.json()
            return data
        }
    })
    const doctorsData = doctors.data

    if(isLoading) {
        return <SmallLoading />
    }

    const closeModal = () => {
        setDeletedDoctor(null)
    }
    const handleDoctorDelete = doctorId => {
        fetch(`${ process.env.REACT_APP_API_URL }/doctors/${ doctorId }`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${ localStorage.getItem('doctorsPortalAccessToken') }`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast.success(data.message, { autoClose: 400 })
                refetch()
            }
        })
    }

    return (
        <section className="overflow-x-auto py-10">
            <h1 className='text-2xl font-bold mb-5'>Manage Doctors</h1>
            <table className="table w-full">
                <thead>
                    <tr className='text-center'>
                        <th className='bg-theme-2nd text-white'>SL</th>
                        <th className='bg-theme-2nd text-white'>Avatar</th>
                        <th className='bg-theme-2nd text-white'>Name</th>
                        <th className='bg-theme-2nd text-white'>Specialty</th>
                        <th className='bg-theme-2nd text-white'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctorsData?.map((doctor, index) => 
                            <tr key={doctor._id} className='text-center'>
                                <th>{ index + 1 }</th>
                                <td>
                                    <img src={ doctor.image } alt="" className='w-24 object-cover h-24 rounded-full mx-auto' />
                                </td>
                                <td>{ doctor.name }</td>
                                <td>{ doctor.specialty }</td>
                                <td>
                                    <label onClick={() => setDeletedDoctor(doctor)} htmlFor="confirmationModal" className="cursor-pointer bg-red-600 py-1 px-3 text-xs text-white font-bold rounded-full">Delete</label>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                deletedDoctor &&
                <ConfirmationModal 
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${ deletedDoctor.name }. It cannot be undone!`}
                    closeModal={closeModal}
                    successAction={handleDoctorDelete}
                    successButtonName={`Delete`}
                    modalData={deletedDoctor}
                />
            }
        </section>
    );
};

export default ManageDoctors;