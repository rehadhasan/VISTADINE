import React from 'react';

const TestimonialSectionSkeleton = () => {
    return (
        <div className="py-16 text-black text-opacity-20 bg-gray-200">
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                {/* OrderDetailsSkeleton for Title */}
                <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-8 animate-pulse"></div>

                {/* OrderDetailsSkeleton for Slider */}
                <div className="mt-8">
                    <div className="px-8">
                        {/* OrderDetailsSkeleton for Quote */}
                        <div className="h-20 bg-gray-300 rounded mb-4 animate-pulse"></div>
                        {/* OrderDetailsSkeleton for Rating */}
                        <div className="flex justify-center items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-6 w-6 bg-gray-300 rounded-full mr-1"></div>
                            ))}
                            <span className="ml-2 h-4 bg-gray-300 rounded w-20 inline-block"></span>
                        </div>
                        {/* OrderDetailsSkeleton for Client Info */}
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 bg-gray-300 rounded-full object-cover overflow-hidden mr-4"></div>
                            <div>
                                <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-24"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSectionSkeleton;
