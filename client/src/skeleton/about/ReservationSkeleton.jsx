// src/components/ReservationSkeletonLoader.js
import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`${className} bg-gray-200 animate-pulse`} />
);

const ReservationSkeleton = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl w-full">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center justify-center">
                    <Skeleton className="w-3/4 h-8 mx-auto" />
                </h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div key={idx} className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Skeleton className="w-full h-6 mb-2" />
                                <Skeleton className="w-full h-12" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <Skeleton className="w-full h-6 mb-2" />
                                <Skeleton className="w-full h-12" />
                            </div>
                        </div>
                    ))}
                    <div className="mb-4">
                        <Skeleton className="w-full h-12 mb-4" />
                        <Skeleton className="w-full h-12" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservationSkeleton;
