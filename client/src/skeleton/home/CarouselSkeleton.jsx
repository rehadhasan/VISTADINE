// CarouselSkeleton.js
import React from 'react';

const CarouselSkeleton = () => {
    const skeletonItems = Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="p-2">
            <div className="bg-white p-4 shadow-md rounded flex flex-col items-center">
                <div className='w-[120px] h-[120px] bg-gray-300 animate-pulse rounded'></div>
                <div className='mt-2 bg-gray-300 w-1/2 h-6 animate-pulse rounded'></div>
            </div>
        </div>
    ));
    const mobileSkeletonItems = Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="p-2">
            <div className="bg-white p-4 shadow-md rounded flex flex-col items-center">
                <div className='w-[120px] h-[120px] bg-gray-300 animate-pulse rounded'></div>
                <div className='mt-2 bg-gray-300 w-1/2 h-6 animate-pulse rounded'></div>
            </div>
        </div>
    ));

    return (
        <section className='bg-bg-secondary'>
            <div className='container mx-auto px-3 py-10'>
                <div className="relative">
                    <div className='hidden md:grid md:grid-cols-4 grid-cols-2 gap-4'>
                        {skeletonItems}
                    </div>
                    <div className='md:hidden grid md:grid-cols-4 grid-cols-2 gap-4'>
                        {mobileSkeletonItems}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselSkeleton;
