import React from 'react'
import { Link } from 'react-router-dom'
import errorpage from '../../assets/images/errorpage.png'

const ErrorPage = () => {
    return (
        <section className="flex items-center h-screen p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="text-center">
                    <img src={ errorpage } alt="" className='mb-b-50' />
                    <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-theme-2nd text-white">Back to Homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage