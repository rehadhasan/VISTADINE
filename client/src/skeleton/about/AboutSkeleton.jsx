// src/components/SkeletonLoader.js
import React from 'react';

const AboutSkeleton = () => {
    return (
        <div className="bg-bg-secondary p-8 animate-pulse">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* About Us Skeleton Section */}
                <div className="text-center mb-16">
                    <div className="h-6 w-1/4 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <div className="h-8 w-3/4 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <div className="h-4 w-1/2 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                </div>

                {/* Our Story Skeleton Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-16">
                    <div className="h-6 w-1/3 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 w-11/12 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 w-10/12 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 w-9/12 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded-lg mb-4"></div>
                </div>
            </div>
        </div>
    );
};

export default AboutSkeleton;
