// src/skeleton/terms/TermsSkeleton.jsx
import React from 'react';

const TermsSkeleton = () => {
    return (
        <div className="bg-gray-100 p-8 animate-pulse">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg">
                {/* Skeleton for Title */}
                <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-6"></div>

                {/* Skeleton for Text Blocks */}
                <div className="space-y-6">
                    {/* Skeleton for Paragraph */}
                    <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/5 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>

                    {/* Skeleton for Section Title */}
                    <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto my-8"></div>

                    {/* Skeleton for Paragraph */}
                    <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/5 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>

                    {/* Repeat the pattern for additional sections */}
                    <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto my-8"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/5 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>
                </div>
            </div>
        </div>
    );
};

export default TermsSkeleton;
