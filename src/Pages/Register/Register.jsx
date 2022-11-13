import React from 'react';
import { Link } from 'react-router-dom';
import useSetTitle from '../../Hooks/useSetTitle';
import Header from '../Shared/Header/Header';

const Register = () => {
    useSetTitle('Register')
    return (
        <>
            <Header />
            <section className="py-20">
                <div className="container mx-auto px-[21px]">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white shadow-box-shadow py-16 px-10 text-center sm:px-12 md:px-[60px]">
                                <div className="mb-10 text-center md:mb-16">
                                    <h2 className='text-4xl font-bold'>Sign Up</h2>
                                </div>
                                <form>
                                    <div className="mb-6">
                                        <input type="text" name='name' placeholder="Name" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                                    </div>
                                    <div className="mb-6">
                                        <input type="email" name='email' placeholder="Email" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                                    </div>
                                    <div className="mb-6">
                                        <input type="password" name='password' placeholder="Password" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                                    </div>
                                    <div className="mb-10">
                                        <input type="submit" value="Sign In" className="w-full cursor-pointer rounded-md border py-3 px-5 text-base font-bold text-white transition bg-gradient-to-r from-theme-2nd to-theme-1st" />
                                    </div>
                                </form>
                                <p className="text-base text-[#adadad] mb-5"> Already have an account? <Link to="/login" className="text-theme-2nd hover:underline"> Login </Link>
                                </p>
                                <div class="text-center border-b border-[#CFCFCF] leading-[0px] mb-5">
                                    <span class="leading-[0px] p-2 font-semibold tracking-wide text-theme-3rd text-base uppercase bg-white">Or</span>
                                </div>
                                <ul className="-mx-2 mb-12 flex justify-between">
                                    <li className="w-full px-2">
                                        <button className="py-3 block w-full rounded-md bg-gradient-to-r from-theme-1st to-theme-2nd">
                                            <svg width="18" height="18" className='mx-auto' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z" fill="white" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                                <div>
                                    <span className="absolute top-1 right-1">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="1.39737" cy="38.6026" r="1.39737" transform="rotate(-90 1.39737 38.6026)" fill="#0FCFEC" />
                                            <circle cx="1.39737" cy="1.99122" r="1.39737" transform="rotate(-90 1.39737 1.99122)" fill="#0FCFEC" />
                                            <circle cx="13.6943" cy="38.6026" r="1.39737" transform="rotate(-90 13.6943 38.6026)" fill="#0FCFEC" />
                                            <circle cx="13.6943" cy="1.99122" r="1.39737" transform="rotate(-90 13.6943 1.99122)" fill="#0FCFEC" />
                                            <circle cx="25.9911" cy="38.6026" r="1.39737" transform="rotate(-90 25.9911 38.6026)" fill="#0FCFEC" />
                                            <circle cx="25.9911" cy="1.99122" r="1.39737" transform="rotate(-90 25.9911 1.99122)" fill="#0FCFEC" />
                                            <circle cx="38.288" cy="38.6026" r="1.39737" transform="rotate(-90 38.288 38.6026)" fill="#0FCFEC" />
                                            <circle cx="38.288" cy="1.99122" r="1.39737" transform="rotate(-90 38.288 1.99122)" fill="#0FCFEC" />
                                            <circle cx="1.39737" cy="26.3057" r="1.39737" transform="rotate(-90 1.39737 26.3057)" fill="#0FCFEC" />
                                            <circle cx="13.6943" cy="26.3057" r="1.39737" transform="rotate(-90 13.6943 26.3057)" fill="#0FCFEC" />
                                            <circle cx="25.9911" cy="26.3057" r="1.39737" transform="rotate(-90 25.9911 26.3057)" fill="#0FCFEC" />
                                            <circle cx="38.288" cy="26.3057" r="1.39737" transform="rotate(-90 38.288 26.3057)" fill="#0FCFEC" />
                                            <circle cx="1.39737" cy="14.0086" r="1.39737" transform="rotate(-90 1.39737 14.0086)" fill="#0FCFEC" />
                                            <circle cx="13.6943" cy="14.0086" r="1.39737" transform="rotate(-90 13.6943 14.0086)" fill="#0FCFEC" />
                                            <circle cx="25.9911" cy="14.0086" r="1.39737" transform="rotate(-90 25.9911 14.0086)" fill="#0FCFEC" />
                                            <circle cx="38.288" cy="14.0086" r="1.39737" transform="rotate(-90 38.288 14.0086)" fill="#0FCFEC" />
                                        </svg>
                                    </span>
                                    <span className="absolute left-1 bottom-1">
                                        <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.288" cy="25.9912" r="1.39737" transform="rotate(-90 2.288 25.9912)" fill="#19D3AE" />
                                            <circle cx="14.5849" cy="25.9911" r="1.39737" transform="rotate(-90 14.5849 25.9911)" fill="#19D3AE" />
                                            <circle cx="26.7216" cy="25.9911" r="1.39737" transform="rotate(-90 26.7216 25.9911)" fill="#19D3AE" />
                                            <circle cx="2.288" cy="13.6944" r="1.39737" transform="rotate(-90 2.288 13.6944)" fill="#19D3AE" />
                                            <circle cx="14.5849" cy="13.6943" r="1.39737" transform="rotate(-90 14.5849 13.6943)" fill="#19D3AE" />
                                            <circle cx="26.7216" cy="13.6943" r="1.39737" transform="rotate(-90 26.7216 13.6943)" fill="#19D3AE" />
                                            <circle cx="2.288" cy="38.0087" r="1.39737" transform="rotate(-90 2.288 38.0087)" fill="#19D3AE" />
                                            <circle cx="2.288" cy="1.39739" r="1.39737" transform="rotate(-90 2.288 1.39739)" fill="#19D3AE" />
                                            <circle cx="14.5849" cy="38.0089" r="1.39737" transform="rotate(-90 14.5849 38.0089)" fill="#19D3AE" />
                                            <circle cx="26.7216" cy="38.0089" r="1.39737" transform="rotate(-90 26.7216 38.0089)" fill="#19D3AE" />
                                            <circle cx="14.5849" cy="1.39761" r="1.39737" transform="rotate(-90 14.5849 1.39761)" fill="#19D3AE" />
                                            <circle cx="26.7216" cy="1.39761" r="1.39737" transform="rotate(-90 26.7216 1.39761)" fill="#19D3AE" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;