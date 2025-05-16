// SkeletonLoader.js
import React from 'react';

const SliderSkeleton = () => {
    return (
        <section className='bg-bg-primary'>
            <div className='container mx-auto px-3 py-10'>
                <div className="relative w-full">
                    <div className='flex md:flex-row flex-col-reverse items-center'>
                        <div className="md:w-1/2 w-full text-white lg:px-20">
                            <div className="bg-gray-700 h-10 w-3/4 mb-4 rounded"></div>
                            <div className="bg-gray-700 h-6 w-1/2 mb-6 rounded"></div>
                            <div className="flex">
                                <div className="bg-gray-700 h-10 w-1/4 rounded mr-2"></div>
                                <div className="bg-gray-700 h-10 w-1/4 rounded"></div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full'>
                            <div className='w-full h-full bg-gray-700'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderSkeleton;
