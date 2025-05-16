import React from 'react';

const AboutUsSkeleton = () => {
    return (
        <section className=''>
            <div className='container mx-auto'>
                {/* OrderDetailsSkeleton for PhoneService */}
                <div className="bg-gray-200 animate-pulse py-4 px-6 flex items-center justify-center">
                    <div className="bg-gray-300 rounded-full h-12 w-12 mr-3 md:h-10 md:w-10"></div>
                    <div className='flex flex-col items-center'>
                        <div className="bg-gray-300 h-5 w-36 mb-2 rounded md:h-4 md:w-32"></div>
                        <div className="bg-gray-300 h-7 w-56 rounded md:h-6 md:w-48"></div>
                    </div>
                </div>

                {/* OrderDetailsSkeleton for VideoSection */}
                <div className="relative w-full h-72 lg:h-96 mt-4 bg-gray-200 animate-pulse">
                    <div className="bg-gray-300 w-full h-full rounded-lg"></div>
                    <button className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gray-600 bg-opacity-50 p-4 rounded-full">
                            <div className="bg-gray-300 h-12 w-12 rounded-full md:h-10 md:w-10"></div>
                        </div>
                    </button>
                </div>

                {/* OrderDetailsSkeleton for About */}
                <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-200 animate-pulse">
                    <div className="lg:w-1/2">
                        <div className="bg-gray-300 h-10 w-72 mb-4 rounded md:h-8 md:w-64"></div>
                        <div className="bg-gray-300 h-7 w-3/4 mb-6 rounded md:h-6 md:w-3/4"></div>
                        <div className="bg-gray-300 h-5 w-48 rounded md:h-4 md:w-48"></div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="bg-gray-300 w-full h-72 rounded-lg md:h-64"></div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default AboutUsSkeleton;
