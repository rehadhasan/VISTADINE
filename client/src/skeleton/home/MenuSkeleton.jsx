import React from 'react';

const MenuSkeleton = () => {
    const skeletonItems = new Array(6).fill(null); // Create an array of placeholders

    return (
        <section className='bg-white'>
            <div className="container mx-auto px-3 py-10">
                <h1 className="text-3xl font-bold text-center mb-8 bg-gray-200 animate-pulse h-8 w-48 mx-auto rounded"></h1>

                {/* Category Buttons OrderDetailsSkeleton */}
                <div className="flex justify-center mb-6">
                    <div className="mx-2 py-2 px-4 rounded-full bg-gray-200 animate-pulse w-24 h-10"></div>
                    <div className="mx-2 py-2 px-4 rounded-full bg-gray-200 animate-pulse w-24 h-10"></div>
                    <div className="mx-2 py-2 px-4 rounded-full bg-gray-200 animate-pulse w-24 h-10"></div>
                </div>

                {/* Menu Items OrderDetailsSkeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skeletonItems.map((_, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-lg relative bg-gray-200 animate-pulse">
                            <div className="w-full h-60 mb-4 rounded-md bg-gray-300"></div>
                            <div className="h-6 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="flex justify-between items-center">
                                <div className="h-6 w-16 bg-gray-300 rounded"></div>
                                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Items Button OrderDetailsSkeleton */}
                <div className="flex justify-center mt-8">
                    <div className="border border-gray-300 bg-gray-200 text-gray-500 py-2 px-4 rounded-lg w-32 h-10"></div>
                </div>
            </div>
        </section>
    );
};

export default MenuSkeleton;
