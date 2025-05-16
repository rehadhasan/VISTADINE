import React from 'react';

const TeamSectionSkeleton = () => {
    const skeletonItems = new Array(3).fill(null); // Array to create placeholders

    return (
        <section className="bg-white">
            <div className="container mx-auto px-3 py-16">
                {/* OrderDetailsSkeleton for Title */}
                <div className="text-center mb-10">
                    <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto mb-2 animate-pulse"></div>
                    <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skeletonItems.map((_, index) => (
                        <div key={index} className="relative group bg-gray-200 animate-pulse rounded-md">
                            <div className="h-80 w-full bg-gray-300 rounded-md"></div>
                            <div className="mt-4 text-center">
                                <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                            </div>
                            <div className="absolute inset-0 bg-gray-300 opacity-100 flex items-center justify-center rounded-md">
                                <div className="flex items-center text-white space-x-4">
                                    <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                                    <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                                    <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                                    <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSectionSkeleton;
