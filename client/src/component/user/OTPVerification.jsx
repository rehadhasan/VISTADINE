import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStore.js";
import toast from "react-hot-toast";

const OTPVerification = () => {
    const {VerifyOTPRequest,isSubmit} = UserStore()
    const navigate = useNavigate()
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        setOtp(e.target.value);
        console.log('OTP:', e.target.value);
    };

    const handleSubmit = async () => {
        if(otp === ''){
            toast.error("OTP is Required !")
        }else{
            let res = await VerifyOTPRequest(otp)
            if(res){
                toast.success("Verification OTP Verified !")
                navigate('/reset-password')
            }else{
                toast.error("Invalid OTP Verification !")
            }
        }
    }

    return (
        <div className="flex justify-center items-center md:h-screen md:py-0 py-10 md:bg-bg-secondary bg-white">
            <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-black text-2xl font-semibold mb-6">OTP Verification</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="otp">Enter OTP</label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
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
                                Verify OTP
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;
