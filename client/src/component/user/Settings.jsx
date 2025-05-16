import React, { useState } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
import UserStore from "../../store/UserStore.js";
import toast from "react-hot-toast";

const Settings = () => {
    const {UserDetails,UpdateUserRequest} = UserStore()
    // State for form fields
    const [formData, setFormData] = useState({
        firstName: UserDetails.firstName,
        lastName: UserDetails.lastName,
        email: UserDetails.email,
        phone: UserDetails.phone,
        password: UserDetails.password,
        photo: UserDetails.photo, // Base64 representation of the uploaded image
    });

    // Handler for input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handler for image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevState) => ({
                    ...prevState,
                    photo: reader.result, // Set base64 string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChanges = async () => {
        toast.error("Sorry, we cannot save this information for security reasons.")

        // let res = await UpdateUserRequest(formData)
        // if(res){
        //     toast.success("Save Changes Successfully.")
        // }else{
        //     toast.error("Something went wrong !")
        // }
    };

    return (
        <div className='p-6 bg-bg-secondary w-full flex justify-center'>
            <div className="p-6 md:p-8 bg-white shadow-lg rounded-lg w-full max-w-lg">
                <h2 className="text-black text-2xl font-bold mb-6 text-center">Edit Setting</h2>
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 mb-4 md:mb-0">
                        <img
                            src={formData.photo || "https://via.placeholder.com/100"}
                            alt="photo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <label className="ml-0 md:ml-4 px-4 py-2 bg-primary text-white rounded cursor-pointer hover:bg-opacity-90">
                        Upload
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full bg-white text-black p-2 border border-primary rounded outline-none focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full bg-white text-black p-2 border border-primary rounded outline-none focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            readOnly={true}
                            onChange={handleInputChange}
                            className="w-full bg-white text-black p-2 border border-primary rounded outline-none focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-white text-black p-2 border border-primary rounded outline-none focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full bg-white text-black p-2 border border-primary rounded outline-none focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <button
                            onClick={handleChanges}
                            type="submit"
                            className="w-full md:w-40 py-2 px-4 bg-primary text-white rounded hover:bg-opacity-90 flex items-center justify-center mx-auto"
                        >
                            <AiOutlineSave className="mr-2" />
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
