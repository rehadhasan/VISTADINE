// LatestItemDetailSkeleton.jsx
import React from 'react';

const DetailsSkeleton = () => {
    return (
        <section className='bg-white'>
            <div className="max-w-4xl mx-auto px-3 py-16">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className='w-full h-96 bg-gray-200 rounded-lg mb-4'></div>
                        <div className="flex mt-4 space-x-2">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className={`w-20 h-20 bg-gray-200 rounded-lg`} />
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                        <div className="w-1/2 h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="flex items-center mb-4">
                            <div className="flex space-x-1">
                                <div className="w-20 h-5 bg-gray-200 rounded"></div>
                            </div>
                            <span className="ml-2 w-24 h-4 bg-gray-200 rounded"></span>
                        </div>
                        <div className="text-xl font-semibold text-black text-opacity-80 mb-4">
                            <div className="w-24 h-6 bg-gray-200 rounded inline-block"></div>
                            <span className="line-through text-black text-opacity-50 ml-2 w-24 h-6 bg-gray-200 rounded inline-block"></span>
                        </div>
                        <div className="text-black text-opacity-70 mb-4">
                            <div className="w-full h-20 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-gray-200 text-gray-400 py-2 px-4 rounded-lg flex items-center hover:bg-gray-300">
                                <div className="w-6 h-6 bg-gray-200 rounded-full mr-2"></div>
                                <div className="w-24 h-6 bg-gray-200 rounded"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-b text-black text-opacity-20">
                    <nav className="flex space-x-4">
                        <button className={`py-2 px-4 border-b-2 bg-gray-200 w-24 h-6 rounded`} />
                        <button className={`py-2 px-4 border-b-2 bg-gray-200 w-24 h-6 rounded`} />
                    </nav>
                </div>

                <div className="mt-6">
                    <div className="w-full h-20 bg-gray-200 rounded mb-4"></div>
                    <div className="space-y-4">
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow-sm">
                                <div className="flex items-center mb-2">
                                    <div className="flex space-x-1">
                                        <div className="w-20 h-5 bg-gray-200 rounded"></div>
                                    </div>
                                    <span className="ml-2 w-24 h-4 bg-gray-200 rounded"></span>
                                </div>
                                <div className="w-full h-16 bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSkeleton;
