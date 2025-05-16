import React from 'react';

const LatestBlogSkeleton = () => {
    return (
        <div className="bg-white py-16">
            <div className="text-center mb-12">
                <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto animate-pulse"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
                {/* Blog Post 1 OrderDetailsSkeleton */}
                <div className="md:w-1/2">
                    <div className="relative">
                        <div className='w-full md:h-80 h-64 bg-gray-300 rounded-lg overflow-hidden animate-pulse'></div>
                    </div>
                    <div className="mt-4">
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
                        <div className="flex items-center mt-4 text-gray-500">
                            <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded w-24 ml-4 animate-pulse"></div>
                        </div>
                        <div className="mt-4 bg-gray-300 rounded w-32 h-8 animate-pulse"></div>
                    </div>
                </div>

                {/* Blog Post 2 OrderDetailsSkeleton */}
                <div className="md:w-1/2">
                    <div className="relative">
                        <div className='w-full md:h-80 h-64 bg-gray-300 rounded-lg overflow-hidden animate-pulse'></div>
                    </div>
                    <div className="mt-4">
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
                        <div className="flex items-center mt-4 text-gray-500">
                            <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded w-24 ml-4 animate-pulse"></div>
                        </div>
                        <div className="mt-4 bg-gray-300 rounded w-32 h-8 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogSkeleton;
