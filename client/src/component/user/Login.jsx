import React, { useState } from 'react';
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStore.js";

const Login = () => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        email: 'engr.rehad@gmail.com',
        password: 'admin',
    });
    const {LoginUserRequest,isSubmit} = UserStore()

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    let emailRegex = (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    const handleSubmit = async () => {
        if (formValues.email.length === 0){
            toast.error("Please enter your email address!");
        }
        else if (!emailRegex.test(formValues.email)){
            toast.error("Please enter valid email address!");
        }
        else if (formValues.password.length === 0){
            toast.error("Please enter your password!");
        }
        else{
            let res = await LoginUserRequest(formValues)
            if(res){
                toast.success("Login successfully.");
                navigate('/')
            }else{
                toast.error("Wrong User & Password")
            }
        }
    }

    return (
        <div className="flex justify-center items-center h-screen md:bg-bg-secondary bg-white">
            <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-black text-2xl font-semibold mb-6">Login</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="email">Email
                            Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className="text-black bg-white w-full px-4 py-2 border border-primary rounded-lg outline-none focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formValues.password}
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
                                Login
                            </button>
                        )
                    }
                    <div className="mt-4 flex md:flex-row flex-col items-center justify-between gap-2">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <a href='/signup' className="text-black text-sm font-medium">Don't have an account?</a>
                        <a href='/forgot' className="text-black text-sm font-medium">Forget password</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
