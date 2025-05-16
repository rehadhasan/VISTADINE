import React from 'react';

const DashboardSkeleton = () => {
    return (
        <div className="bg-bg-secondary w-full md:w-3/4 p-6 animate-pulse">
            {/* Account Information OrderDetailsSkeleton */}
            <div className="bg-white p-6 mb-6 shadow-md rounded">
                <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            </div>

            {/* Orders Information OrderDetailsSkeleton */}
            <div className="bg-white p-6 shadow-md rounded">
                <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                        <tr>
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

export default DashboardSkeleton;
