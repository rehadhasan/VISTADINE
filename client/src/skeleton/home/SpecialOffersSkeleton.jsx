import React from 'react';

const SpecialOffersSkeleton = () => {
    const skeletonItems = new Array(3).fill(null); // Array to create placeholders

    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* OrderDetailsSkeleton for Title */}
                <h2 className="text-3xl font-bold text-black mb-4 bg-gray-200 animate-pulse h-8 w-72 mx-auto rounded"></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* OrderDetailsSkeleton for Slider Items */}
                    <div className="slick-slider">
                        {skeletonItems.map((_, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg animate-pulse">
                                <div className="h-40 bg-gray-300 mb-4 rounded"></div>
                                <div className="h-6 bg-gray-300 mb-4 rounded"></div>
                                <div className="h-4 bg-gray-300 mb-4 rounded"></div>
                                <div className="h-12 bg-gray-300 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* OrderDetailsSkeleton for Static Content */}
                    <div className='rounded md:flex flex-col items-center justify-center hidden w-full h-full bg-gray-300 animate-pulse'>
                        <ul className='text-[65px] text-bold text-gray-500'>
                            <li className='h-6 bg-gray-400 mb-2 rounded w-40'></li>
                            <li className='h-6 bg-gray-400 mb-2 rounded w-40'></li>
                            <li className='h-6 bg-gray-400 mb-2 rounded w-40'></li>
                            <li className='h-6 bg-gray-400 mb-2 rounded w-40'></li>
                            <li className='h-6 bg-gray-400 mb-2 rounded w-40'></li>
                        </ul>
                        <button className='btn w-60 mt-3 border border-gray-400 bg-gray-300 text-gray-500'>View All Menu List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffersSkeleton;
