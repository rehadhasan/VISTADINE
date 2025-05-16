// src/components/GallerySkeletonLoader.js
import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`${className} bg-gray-200 animate-pulse`} />
);

const GallerySkeleton = () => {
    return (
        <section className='bg-white'>
            <div className="container mx-auto px-3 py-10">
                <h2 className="text-4xl font-bold text-center justify-center mb-8">
                    <Skeleton className='w-64 h-8 mx-auto' /> {/* Simulating title */}
                </h2>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className='flex flex-col gap-4'>
                        <div className="relative rounded w-full h-[400px] overflow-hidden">
                            <Skeleton className='w-full h-full' />
                        </div>
                        <div className="relative rounded w-full h-[500px] overflow-hidden">
                            <Skeleton className='w-full h-full' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className="relative rounded w-full h-[500px] overflow-hidden">
                            <Skeleton className='w-full h-full' />
                        </div>
                        <div className="relative rounded w-full h-[500px] overflow-hidden">
                            <Skeleton className='w-full h-full' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className="relative rounded w-full h-[400px] overflow-hidden">
                            <Skeleton className='w-full h-full' />
                        </div>
                        <div className="relative rounded w-full h-[400px] overflow-hidden">
                            <Skeleton className='w-full h-full' />
                        </div>
                        <div className="relative rounded w-full h-[400px] overflow-hidden">
                            <Skeleton className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySkeleton;
