import React from 'react';

const SettingsSkeleton = () => {
    return (
        <div className='p-6 bg-bg-secondary w-full flex justify-center'>
            <div className="p-6 md:p-8 bg-white shadow-lg rounded-lg w-full max-w-lg animate-pulse">
                <h2 className="bg-gray-200 h-8 w-48 mb-6 mx-auto rounded"></h2>
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                    <div className="bg-gray-200 w-24 h-24 rounded-full mb-4 md:mb-0"></div>
                    <div className="ml-0 md:ml-4 bg-gray-200 w-24 h-10 rounded"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-gray-200 w-full h-10 rounded"></div>
                    <div className="bg-gray-200 w-full h-10 rounded"></div>
                    <div className="bg-gray-200 w-full h-10 rounded"></div>
                    <div className="bg-gray-200 w-full h-10 rounded"></div>
                    <div className="bg-gray-200 w-full h-10 rounded col-span-1 md:col-span-2"></div>
                    <div className="bg-gray-200 w-full h-12 rounded col-span-1 md:col-span-2"></div>
                </div>
            </div>
        </div>
    );
};

export default SettingsSkeleton;
