// src/components/FAQSkeletonLoader.js
import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`${className} bg-gray-200 animate-pulse`} />
);

const FAQSkeleton = () => {
    return (
        <section className='bg-white'>
            <div className="max-w-2xl mx-auto p-6">
                {Array.from({length: 5}).map((_, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex justify-between items-center w-full p-4 bg-gray-200 rounded-md">
                            <Skeleton className="w-3/4 h-6"/> {/* Simulating FAQ question */}
                            <Skeleton className="w-6 h-6"/> {/* Simulating toggle button */}
                        </div>
                        <div className="p-4 bg-white border border-t-0 border-gray-300 rounded-b-md">
                            <Skeleton className="w-full h-4 mb-2"/>
                            <Skeleton className="w-full h-4 mb-2"/>
                            <Skeleton className="w-full h-4"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSkeleton;
