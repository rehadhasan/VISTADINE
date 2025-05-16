import React from 'react';

const OrderSkeleton = () => {
    return (
        <div className="w-full md:w-3/4 p-6 animate-pulse">
            {/* My Orders Information OrderDetailsSkeleton */}
            <div className="bg-white p-6 shadow-md rounded">
                <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                        <tr className="bg-gray-300 whitespace-nowrap">
                            <th className="p-2">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                            </th>
                            <th className="p-2">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                            </th>
                            <th className="p-2">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                            </th>
                            <th className="p-2">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                            </th>
                            <th className="p-2">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array(2).fill().map((_, i) => (
                            <tr key={i} className="whitespace-nowrap">
                                <td className="p-2 border-b">
                                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 bg-gray-300 rounded w-12"></div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderSkeleton;
