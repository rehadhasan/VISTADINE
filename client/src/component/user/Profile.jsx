import React, { useState } from 'react';
import UserStore from "../../store/UserStore.js";
import toast from "react-hot-toast";

function Profile() {
    const {ProfileDetails, UpdateProfileRequest} = UserStore()

    const [formData, setFormData] = useState({
        cus_name: ProfileDetails ? ProfileDetails.cus_name : "",
        cus_add: ProfileDetails ? ProfileDetails.cus_add : "",
        cus_city: ProfileDetails ? ProfileDetails.cus_city : "",
        cus_state: ProfileDetails ? ProfileDetails.cus_state : "",
        cus_postcode: ProfileDetails ? ProfileDetails.cus_postcode : "",
        cus_country: ProfileDetails ? ProfileDetails.cus_country : "",
        cus_phone: ProfileDetails ? ProfileDetails.cus_phone : "",
        cus_fax: ProfileDetails ? ProfileDetails.cus_fax : "",
        ship_name: ProfileDetails ? ProfileDetails.ship_name : "",
        ship_add: ProfileDetails ? ProfileDetails.ship_add : "",
        ship_city: ProfileDetails ? ProfileDetails.ship_city : "",
        ship_state: ProfileDetails ? ProfileDetails.ship_state : "",
        ship_postcode: ProfileDetails ? ProfileDetails.ship_postcode : "",
        ship_country: ProfileDetails ? ProfileDetails.ship_country : "",
        ship_phone: ProfileDetails ? ProfileDetails.ship_phone : "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        let res = await UpdateProfileRequest(formData)
        if(res){
            toast.success("Save Profile Successfully.")
        }else{
            toast.error("Something went wrong !")
        }
    };

    return (
        <div className="w-full flex flex-col items-center bg-bg-secondary p-6">
            <div className="bg-white md:p-8 p-5 rounded shadow-md w-full">
                <h2 className="text-black text-2xl font-bold mb-6">Edit Profile</h2>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="cus_name"
                            placeholder="Customer Name"
                            value={formData.cus_name}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="cus_add"
                            placeholder="Customer Address"
                            value={formData.cus_add}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="cus_city"
                            placeholder="City"
                            value={formData.cus_city}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="cus_state"
                            placeholder="State"
                            value={formData.cus_state}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="number"
                            name="cus_postcode"
                            placeholder="Postcode"
                            value={formData.cus_postcode}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="cus_country"
                            placeholder="Country"
                            value={formData.cus_country}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="number"
                            name="cus_phone"
                            placeholder="Phone"
                            value={formData.cus_phone}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="number"
                            name="cus_fax"
                            placeholder="Fax"
                            value={formData.cus_fax}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="ship_name"
                            placeholder="Shipping Name"
                            value={formData.ship_name}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="ship_add"
                            placeholder="Shipping Address"
                            value={formData.ship_add}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="ship_city"
                            placeholder="Shipping City"
                            value={formData.ship_city}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="ship_state"
                            placeholder="Shipping State"
                            value={formData.ship_state}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="number"
                            name="ship_postcode"
                            placeholder="Shipping Postcode"
                            value={formData.ship_postcode}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name="ship_country"
                            placeholder="Shipping Country"
                            value={formData.ship_country}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                        <input
                            type="number"
                            name="ship_phone"
                            placeholder="Shipping Phone"
                            value={formData.ship_phone}
                            onChange={handleChange}
                            className="bg-white text-black p-2 border border-primary rounded w-full outline-none focus:outline-none"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary hover:bg-opacity-90 w-full md:w-auto">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
