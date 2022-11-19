import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
import SmallLoading from '../../Shared/LoadingSpinner/SmallLoading';

const AddDoctor = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imageUploadApiKey = process.env.REACT_APP_IMGBB_API_KEY
    const { data:appointmentSpecialty = [], isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch(`${ process.env.REACT_APP_API_URL }/appointmentSpecialty`)
            const data = await res.json()
            return data
        }
    })
    const specialtyData = appointmentSpecialty.data

    if(isLoading) {
        return <SmallLoading />
    }
    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${ imageUploadApiKey }`
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success) {
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                // Save doctor information to tha database
                fetch(`${ process.env.REACT_APP_API_URL }/doctors`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${ localStorage.getItem('doctorsPortalAccessToken') }`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    toast.success(data.message, { autoClose: 400 })
                    navigate('/dashboard/manage-doctors')
                })
            }
        })

    }
    
    return (
        <section className='py-10'>
            <h2>Add a New Doctor</h2>
            <div className='w-full md:max-w-xl'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="mb-6">
                        <input type="text" {...register("name", { required: true, minLength: { value: 4, message: 'Name must be 4 character or longer' } })} placeholder="Name" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                        {errors.name && <p className='text-red-600 text-xs text-left' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="mb-6">
                        <input type="email" {...register("email", {required: true})} placeholder="Email" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                        {errors.email && <p className='text-red-600 text-xs text-left' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="mb-6">
                            <select {...register("specialty", {required: true})} className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border rounded-lg focus:outline-none w-full">
                                {
                                    specialtyData.map(specialty => <option
                                        value={ specialty.name }
                                        key={ specialty._id }
                                    >{ specialty.name }</option>)
                                }
                            </select>
                    </div>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 mb-6">
                        <div className="space-y-1 text-center">
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="fileUpload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus:outline-none">
                                    <span>Upload Your Photo</span>
                                    <input id='fileUpload' {...register("image", {required: true})} type="file" className="sr-only" />
                                </label>
                            </div>
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {errors.fileUpload && <p className='text-red-600 text-xs text-left' role="alert">{errors.fileUpload?.message}</p>}
                    </div>
                    <div className="mb-10">
                        <PrimaryButton classes={'w-full block'} btnText={ 'Add Doctor' } />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;