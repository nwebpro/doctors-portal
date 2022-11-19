import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import SmallLoading from '../../Shared/LoadingSpinner/SmallLoading';

const AllUsers = () => {
    const {data:users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${ process.env.REACT_APP_API_URL }/users`)
            const data = await res.json()
            return data
        }
    })
    const user = users.data
    
    const handleMakeAdmin = userId => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/admin/${ userId }`, {
            method: 'PUT',
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

    if(isLoading) {
        return <SmallLoading />
    }
    return (
        <div className="overflow-x-auto">
            <h1 className='text-2xl font-bold text-black mb-[30px]'>All Users</h1>
            <table className="table w-full">
                <thead>
                    <tr className='text-center'>
                        <th className='bg-theme-2nd text-white'>SL</th>
                        <th className='bg-theme-2nd text-white'>Name</th>
                        <th className='bg-theme-2nd text-white'>Email</th>
                        <th className='bg-theme-2nd text-white'>Admin</th>
                        <th className='bg-theme-2nd text-white'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user?.map((userInfo, index) => 
                            <tr key={userInfo._id} className='text-center'>
                                <th>{ index + 1 }</th>
                                <td>{ userInfo.name }</td>
                                <td>{ userInfo.email }</td>
                                <td>
                                    {
                                        userInfo?.role !== 'Admin' &&
                                        <button onClick={() => handleMakeAdmin(userInfo._id)} className='bg-theme-2nd py-1 px-3 text-xs text-white font-bold rounded-full'>Make Admin</button>
                                    }
                                </td>
                                <td>
                                    <button className='bg-red-600 py-1 px-3 text-xs text-white font-bold rounded-full'>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;