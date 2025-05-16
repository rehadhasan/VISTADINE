// CategoryFilterSkeleton.jsx
import React from 'react';

const CategoryFilterSkeleton = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md animate-pulse">
            <div className="mb-4">
                <div className="relative">
                    <div className="w-full py-2 pl-10 pr-4 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 bg-gray-200 h-6 rounded"></h3>
            <ul>
                {[...Array(4)].map((_, index) => (
                    <li className="mb-2" key={index}>
                        <div className="w-1/2 h-6 bg-gray-200 rounded"></div>
                    </li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2 bg-gray-200 h-6 rounded"></h3>
            <div>
                {[...Array(5)].map((_, index) => (
                    <label className="block mb-1 text-sm" key={index}>
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                        </div>
                    </label>
                ))}
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2 bg-gray-200 h-6 rounded"></h3>
            <div>
                <div className="w-full h-2 bg-gray-200 rounded-lg"></div>
                <div className="flex justify-between text-sm mt-1">
                    <span className="w-1/4 h-4 bg-gray-200 rounded"></span>
                    <span className="w-1/4 h-4 bg-gray-200 rounded"></span>
                </div>
            </div>
            <button className="mt-4 bg-gray-200 h-10 rounded-lg flex items-center justify-center"></button>
        </div>
    );
};

export default CategoryFilterSkeleton;
