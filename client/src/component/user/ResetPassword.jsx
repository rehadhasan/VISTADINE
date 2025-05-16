import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStore.js";
import toast from "react-hot-toast";

const ResetPassword = () => {
    const {ResetPasswordRequest,isSubmit} = UserStore()
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name, e.target.value);
    };

    const handleSubmit = async () => {
        if(formValues.newPassword === ''){
            toast.error("New Password Required !")
        }else if(formValues.confirmPassword === ''){
            toast.error("Confirm Password Required !")
        }else if(!formValues.confirmPassword.match(formValues.newPassword)){
            toast.error("Please Confirm Your Password Doesn't Match !")
        }
        else{
            let res = await ResetPasswordRequest(formValues.confirmPassword)
            if(res){
                toast.success("Password Reset Successfully !")
                navigate('/login')
            }else{
                toast.error("Something went wrong !")
            }
        }
    }

    return (
        <div className="flex justify-center items-center md:h-screen md:py-0 py-10 md:bg-bg-secondary bg-white">
            <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-black text-2xl font-semibold mb-6">Reset Password</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={formValues.newPassword}
                            onChange={handleChange}
                            className="text-black bg-white w-full px-4 py-2 border border-primary rounded-lg outline-none focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
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
                                Reset Password
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
