import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContactSkeleton = () => {
    return (
        <div className="bg-bg-secondary">
            <div className="max-w-6xl mx-auto px-3 py-16">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 bg-white shadow-lg p-8 rounded-lg mb-8 lg:mb-0">
                        <h2 className="text-2xl font-bold mb-6 text-black">
                            <Skeleton width={150} height={30} />
                        </h2>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <Skeleton height={50} />
                                <Skeleton height={50} />
                            </div>
                            <Skeleton height={50} className="mb-4" />
                            <Skeleton height={100} className="mb-4" />
                            <div className="flex items-center mb-4">
                                <Skeleton width={20} height={20} className="mr-2" />
                                <Skeleton width={150} height={20} />
                            </div>
                            <Skeleton width={100} height={40} />
                        </form>
                    </div>

                    {/* Contact Info */}
                    <aside className="lg:w-1/3 lg:ml-8">
                        <div className="bg-white shadow-lg p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-6 text-black">
                                <Skeleton width={150} height={30} />
                            </h3>
                            <Skeleton count={2} height={20} />
                            <ul className="mt-4 space-y-4 text-black text-opacity-70">
                                <li className='flex items-center gap-3'>
                                    <Skeleton circle height={30} width={30} />
                                    <div className='flex flex-col'>
                                        <Skeleton width={200} height={20} />
                                        <Skeleton width={200} height={20} />
                                    </div>
                                </li>
                            </ul>
                            <ul className="mt-4 space-y-2 text-black text-opacity-70">
                                <li className='flex items-center gap-3'>
                                    <Skeleton circle height={30} width={30} />
                                    <div className='flex flex-col'>
                                        <Skeleton width={200} height={20} />
                                        <Skeleton width={200} height={20} />
                                        <Skeleton width={200} height={20} />
                                    </div>
                                </li>
                            </ul>
                            <ul className="mt-4 space-y-2 text-black">
                                <li className='flex items-center gap-3'>
                                    <Skeleton circle height={30} width={30} />
                                    <div className='flex flex-col'>
                                        <Skeleton width={200} height={20} />
                                        <Skeleton width={200} height={20} />
                                        <Skeleton width={200} height={20} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ContactSkeleton;
