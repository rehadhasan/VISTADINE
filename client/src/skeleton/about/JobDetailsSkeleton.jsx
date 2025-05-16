// src/components/JobDetailsSkeletonLoader.js
import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`${className} bg-gray-200 animate-pulse`} />
);

const JobDetailsSkeleton = () => {
    return (
        <section className="bg-white text-black">
            <div className="max-w-5xl mx-auto px-3 py-16">
                {/* Job Title */}
                <Skeleton className="w-3/4 h-8 mb-4" />

                {/* Job Vacancy */}
                <Skeleton className="w-1/4 h-6 mb-6" />

                {/* Job Responsibilities */}
                <div className="mb-8">
                    <Skeleton className="w-1/3 h-6 mb-2" />
                    <div className="space-y-2">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <Skeleton key={index} className="w-full h-4" />
                        ))}
                    </div>
                </div>

                {/* Employment Status */}
                <Skeleton className="w-1/4 h-6 mb-4" />

                {/* Job Location */}
                <Skeleton className="w-1/4 h-6 mb-4" />

                {/* Salary */}
                <Skeleton className="w-1/4 h-6 mb-8" />

                {/* Email Address */}
                <Skeleton className="w-1/2 h-6 mt-8" />
            </div>
        </section>
    );
};

export default JobDetailsSkeleton;
