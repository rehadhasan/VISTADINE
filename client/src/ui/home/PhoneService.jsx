import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const PhoneService = () => {
    return (
        <div className="bg-black text-white py-4 px-6 flex items-center justify-center">
            <FiPhoneCall className="text-2xl mr-3" />
            <div className='flex flex-col items-center'>
                <p className="font-semibold text-base">Our 24/7 Phone Services</p>
                <p className="font-bold text-xl">+880 1321774599</p>
            </div>
        </div>
    );
};

export default PhoneService;
