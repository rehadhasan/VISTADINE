import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogSkeleton = () => {
    return (
        <section className='bg-white'>
            <div className="container mx-auto px-3 py-16">
                <h2 className="text-center text-4xl font-bold">
                    <Skeleton width={200} height={40} />
                </h2>

                {/* Category buttons */}
                <div className="flex justify-center space-x-4 mt-8 mb-12">
                    {Array(4).fill(null).map((_, index) => (
                        <Skeleton key={index} width={100} height={40} className="rounded-md" />
                    ))}
                </div>

                {/* Blog grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {Array(6).fill(null).map((_, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className='w-full h-64 object-cover overflow-hidden'>
                                <Skeleton height="100%" />
                            </div>
                            <div className="p-6">
                                <Skeleton width={150} height={30} />
                                <Skeleton count={3} />
                                <div className="flex items-center text-black text-opacity-50 text-sm mb-4">
                                    <Skeleton circle width={20} height={20} />
                                    <Skeleton width={60} height={20} className="ml-2" />
                                    <Skeleton circle width={20} height={20} className="ml-4" />
                                    <Skeleton width={60} height={20} className="ml-2" />
                                </div>
                                <Skeleton width={100} height={30} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSkeleton;
