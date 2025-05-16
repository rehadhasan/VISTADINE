import React, { useState } from 'react';
import toast from "react-hot-toast";
import UserStore from "../../store/UserStore.js";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const {SaveUserRequest,isSubmit} = UserStore()

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    let emailRegex = (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    const handleSubmit = async () => {
      if (formValues.firstName.length === 0){
          toast.error("Please enter your first name!");
      }else if (formValues.lastName.length === 0){
          toast.error("Please enter your last name!");
      }
      else if (formValues.email.length === 0){
          toast.error("Please enter your email address!");
      }
      else if (!emailRegex.test(formValues.email)){
          toast.error("Please enter valid email address!");
      }
      else if (formValues.phone.length === 0){
          toast.error("Please enter your phone number!");
      }
      else if (formValues.password.length === 0){
          toast.error("Please enter your password!");
      }
      else if (formValues.confirmPassword.length === 0){
          toast.error("Please enter your password again!");
      }
      else if (!formValues.confirmPassword.match(formValues.password)){
          toast.error("Your password doesn't match!");
      }
      else{
          let res = await SaveUserRequest(formValues)
          if(res){
              toast.success("User saved successfully.");
              navigate('/login')
          }else{
              toast.error('User Already Have Exists!')
          }
      }
    }

    return (
        <div className="flex justify-center items-center md:bg-bg-secondary bg-white py-10">
            <div className="bg-white p-8 md:rounded-lg w-96">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="username">First
                            Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                            className="text-black bg-white w-full px-4 py-2 border border-primary rounded-lg outline-none focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="username">Last
                            Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                            className="text-black bg-white w-full px-4 py-2 border border-primary rounded-lg outline-none focus:outline-none"
                        />
                    </div>
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
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="email">Phone
                            Number</label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            value={formValues.phone}
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
                    <div className="mb-4">
                        <label className="block text-black text-sm font-medium mb-1" htmlFor="password">Confirm
                            Password</label>
                        <input
                            type="confirmPassword"
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
                                Register
                            </button>
                        )
                    }

                </div>
                <p className="mt-4 text-sm">
                    Already have an account? <a href="/login" className="text-primary">Click Here</a> to login.
                </p>
            </div>
        </div>
    );
};

export default Signup;
