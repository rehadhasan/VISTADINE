import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogDetailsSkeleton = () => {
    return (
        <section className='bg-white'>
            <div className="container mx-auto px-3 py-16">
                <div className="flex flex-col lg:flex-row">
                    <main className="lg:w-2/3 lg:pr-8">
                        <div className='w-full md:h-96 h-64 object-cover overflow-hidden rounded-lg mb-4'>
                            <Skeleton height="100%" />
                        </div>
                        <div className="flex items-center space-x-2 text-black text-opacity-70 mb-4">
                            <Skeleton width={20} height={20} circle />
                            <Skeleton width={150} height={20} />
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-black">
                            <Skeleton width={300} height={40} />
                        </h1>
                        <article className="text-lg leading-8 text-black text-opacity-70">
                            <Skeleton count={5} />
                        </article>

                        {/* Share Buttons */}
                        <section className="mt-8">
                            <h2 className="text-2xl font-bold mb-4 text-black">
                                <Skeleton width={100} height={30} />
                            </h2>
                            <div className="flex space-x-4">
                                {Array(4).fill(null).map((_, index) => (
                                    <Skeleton key={index} width={40} height={40} circle />
                                ))}
                            </div>
                        </section>

                        {/* Comment Section */}
                        <section className="mt-8">
                            <h2 className="text-2xl font-bold mb-4 text-black">
                                <Skeleton width={150} height={30} />
                            </h2>
                            <Skeleton height={100} />
                            <Skeleton width={120} height={40} className="mt-4" />
                        </section>

                        {/* Display Public Comments */}
                        <section className="mt-8">
                            <h2 className="text-2xl font-bold mb-4 text-black">
                                <Skeleton width={150} height={30} />
                            </h2>
                            <ul>
                                {Array(2).fill(null).map((_, index) => (
                                    <li key={index} className="mb-4 p-4 text-black bg-primary bg-opacity-10 rounded-lg">
                                        <Skeleton width={200} height={20} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </main>
                    <aside className="lg:w-1/3 mt-8 lg:mt-0">
                        {/* Blog Categories */}
                        <div className="bg-black bg-opacity-5 p-4 rounded-lg mb-8">
                            <h3 className="text-xl font-bold mb-4">
                                <Skeleton width={150} height={30} />
                            </h3>
                            <ul>
                                {Array(4).fill(null).map((_, index) => (
                                    <li key={index} className="mb-2">
                                        <Skeleton width={100} height={20} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Blogs */}
                        <div className="bg-black bg-opacity-5 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">
                                <Skeleton width={150} height={30} />
                            </h3>
                            <ul>
                                {Array(3).fill(null).map((_, index) => (
                                    <li key={index} className="mb-4">
                                        <Skeleton width={200} height={20} />
                                        <Skeleton width={100} height={15} className="mt-2" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsSkeleton;
