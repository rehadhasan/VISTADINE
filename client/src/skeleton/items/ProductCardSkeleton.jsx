// ProductCardSkeleton.jsx
import React from 'react';

const ProductCardSkeleton = () => {
    return (
        <>
            {[...Array(9).keys()].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                    <div className="w-full h-52 bg-gray-200 rounded mb-4"></div>
                    <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="w-1/4 h-6 bg-gray-200 rounded"></div>
                        <div className="w-1/4 h-6 bg-gray-200 rounded"></div>
                    </div>
                    <button
                        className="mt-4 bg-gray-200 h-10 rounded-lg flex items-center justify-center w-full"></button>
                </div>
            ))}
        </>
    );
};

export default ProductCardSkeleton;
