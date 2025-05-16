// src/components/Reservation.js
import React, { useState, useEffect } from 'react';
import ReservationSkeleton from "../../skeleton/about/ReservationSkeleton.jsx";
import ReservationStore from "../../store/ReservationStore.js";
import UserStore from "../../store/UserStore.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Reservation = () => {
    const {SaveReservationRequest, isSubmit} = ReservationStore()
    const {isLogin} = UserStore()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        numberOfPersons: '',
        phone: '',
        checkInDate: '',
        checkInTime: '',
    });
    console.log(formData)

    const [loading, setLoading] = useState(true); // Simulate loading state

    // Simulate data fetching
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500); // 1 seconds
        return () => clearTimeout(timer);
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = async () => {
        if(!formData.fullName || !formData.emailAddress || !formData.numberOfPersons || !formData.phone || !formData.checkInDate || !formData.checkInTime){
            toast.error("Please Fill The Reservation Form.")
        }else{
            let res = await SaveReservationRequest(formData)
            if(res){
                toast.success("Your Order Send Successfully !")
                navigate('/orders')
            }else{
                toast.error("Something Went Wrong !")
            }
        }
    }

    if (loading) {
        return <ReservationSkeleton />;
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl w-full">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">Reserve Your Table</h2>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fullName">
                                Full Name <span className="text-red-500">**</span>
                            </label>
                            <input
                                className="appearance-none block w-full bg-white focus:bg-white text-black focus:text-black border border-primary rounded py-3 px-4 leading-tight outline-none focus:outline-none"
                                id="fullName"
                                type="text"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="emailAddress">
                                Email Address <span className="text-red-500">**</span>
                            </label>
                            <input
                                className="appearance-none block w-full bg-white focus:bg-white text-black focus:text-black border border-primary rounded py-3 px-4 leading-tight outline-none focus:outline-none"
                                id="emailAddress"
                                type="email"
                                placeholder="Email Address"
                                value={formData.emailAddress}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="numberOfPersons">
                                Number of Persons <span className="text-red-500">**</span>
                            </label>
                            <input
                                className="appearance-none block w-full bg-white focus:bg-white text-black focus:text-black border border-primary rounded py-3 px-4 leading-tight outline-none focus:outline-none"
                                id="numberOfPersons"
                                type="number"
                                placeholder="Enter Number Of Persons"
                                value={formData.numberOfPersons}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="phone">
                                Phone <span className="text-red-500">**</span>
                            </label>
                            <input
                                className="appearance-none block w-full bg-white focus:bg-white text-black focus:text-black border border-primary rounded py-3 px-4 leading-tight outline-none focus:outline-none"
                                id="phone"
                                type="text"
                                placeholder="Enter Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="checkInDate">
                                Check-in Date <span className="text-red-500">**</span>
                            </label>
                            <input
                                className="appearance-none block w-full bg-white focus:bg-white text-black focus:text-black border border-primary rounded py-3 px-4 leading-tight outline-none focus:outline-none"
                                id="checkInDate"
                                type="date"
                                placeholder="Enter Check-In Date"
                                value={formData.checkInDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="checkInTime">
                                Check-in Time <span className="text-red-500">**</span>
                            </label>
                            <input
                                className="appearance-none block w-full bg-white focus:bg-white text-black focus:text-black border border-primary rounded py-3 px-4 leading-tight outline-none focus:outline-none"
                                id="checkInTime"
                                type="time"
                                placeholder="Enter Check-In Time"
                                value={formData.checkInTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* ReCAPTCHA and Submit Button */}
                    {
                        isLogin()?(
                            isSubmit?(
                                <button
                                    className="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Loading...
                                </button>
                            ): (
                                <button
                                    onClickCapture={handleSubmit}
                                    className="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={() => console.log('Booking Data:', formData)}  // Log entire form data on submit
                                >
                                    Book Table
                                </button>
                            )
                        ) : (
                            <div className="mb-4">
                                <div className="flex justify-center items-center mb-4">
                                    <div className="g-recaptcha" data-sitekey="your-site-key">
                                        <a href='/login' className='text-black text-base font-medium hover:underline'>Let's
                                            Login to continue.</a>
                                    </div>
                                </div>
                                <button
                                    className="w-full bg-black bg-opacity-30 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-not-allowed"
                                    type="button"
                                >
                                    Book Table
                                </button>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Reservation;
