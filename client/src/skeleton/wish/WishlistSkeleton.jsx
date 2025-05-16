import React from 'react';

const WishlistSkeleton = () => {
    return (
        <tr className="border-b whitespace-nowrap">
            {/* Delete Icon Placeholder */}
            <td className="p-4">
                <div className="bg-gray-200 animate-pulse w-6 h-6 rounded"></div>
            </td>

            {/* Product Image Placeholder */}
            <td className="p-4">
                <div className="bg-gray-200 animate-pulse w-16 h-16 rounded"></div>
            </td>

            {/* Product Name Placeholder */}
            <td className="p-4">
                <div className="bg-gray-200 animate-pulse h-4 w-36 mb-2"></div>
            </td>

            {/* Description Placeholders */}
            <td className="p-4">
                <div className="bg-gray-200 animate-pulse h-4 w-24 mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-32 mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-20"></div>
            </td>

            {/* Price Placeholder */}
            <td className="p-4">
                <div className="bg-gray-200 animate-pulse h-4 w-16"></div>
            </td>

            {/* Action Button Placeholder */}
            <td className="p-4 flex items-center justify-center">
                <div className="bg-gray-200 animate-pulse h-8 w-20 rounded"></div>
            </td>
        </tr>
    );
};

export default WishlistSkeleton;
