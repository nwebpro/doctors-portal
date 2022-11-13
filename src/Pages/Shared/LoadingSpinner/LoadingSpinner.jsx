import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-800'></div>
        </div>
    )
}

export default LoadingSpinner