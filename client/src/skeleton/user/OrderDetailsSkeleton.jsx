import React from "react";

const OrderDetailsSkeleton = () => {
    return (
        <section className='bg-bg-secondary w-full p-4 sm:p-6'>
            <div className="container mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg animate-pulse">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-4 sm:mb-0"></div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="h-10 w-40 bg-gray-300 rounded"></div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                            <div className="h-4 w-3/5 bg-gray-200 rounded"></div>
                            <div className="h-4 w-2/5 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                            <tr className="bg-white text-black whitespace-nowrap">
                                <th className="p-2 text-left font-semibold border-b h-6 bg-gray-300"></th>
                                <th className="p-2 text-left font-semibold border-b h-6 bg-gray-300"></th>
                                <th className="p-2 text-left font-semibold border-b h-6 bg-gray-300"></th>
                                <th className="p-2 text-left font-semibold border-b h-6 bg-gray-300"></th>
                                <th className="p-2 text-left font-semibold border-b h-6 bg-gray-300"></th>
                                <th className="p-2 text-left font-semibold border-b h-6 bg-gray-300"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-black whitespace-nowrap">
                                <td className="p-2 border-b">
                                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                                </td>
                                <td className="p-2">
                                    <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-8 bg-gray-200 rounded"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                </td>
                            </tr>
                            <tr className="text-black whitespace-nowrap">
                                <td className="p-2 border-b">
                                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                                </td>
                                <td className="p-2">
                                    <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-8 bg-gray-200 rounded"></div>
                                </td>
                                <td className="p-2 border-b">
                                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="h-4 w-20 bg-gray-300 rounded flex items-center"></div>
            </div>
        </section>
    );
};

export default OrderDetailsSkeleton;
