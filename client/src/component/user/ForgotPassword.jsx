import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStore.js";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const {SendOTPRequest,isSubmit} = UserStore()
    const navigate = useNavigate()
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log('Email:', e.target.value);
    };

    const handleSubmit = async () => {
        if(email === ''){
            toast.error("Email Address Required !")
        }else{
            let res = await SendOTPRequest(email)
            if(res){
                toast.success('We have already send otp on your mail.')
                navigate('/otp-verification')
            }else{
                toast.error('wrong email address !')
            }
        }
    }

    return (
        <div className="flex justify-center items-center md:h-screen md:py-0 py-10 md:bg-bg-secondary bg-white">
            <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-black text-2xl font-semibold mb-6">Forgot Password</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            className="text-black bg-white w-full px-4 py-2 border border-primary rounded-lg outline-none focus:outline-none"
                        />
                    </div>
                    {
                        isSubmit === true?(
                            <button className="w-full bg-primary bg-opacity-90 text-white py-2 rounded-lg hover:bg-primary">
                                Loading...
                            </button>
                        ): (
                            <button onClick={handleSubmit}
                                    className="w-full bg-primary bg-opacity-90 text-white py-2 rounded-lg hover:bg-primary">
                                Send OTP
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
