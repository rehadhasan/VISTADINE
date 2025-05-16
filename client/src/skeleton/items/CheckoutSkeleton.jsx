import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`${className} bg-gray-200 animate-pulse`} />
);

const CheckoutSkeleton = () => {
    return (
        <section className='bg-white'>
            <div className="max-w-4xl mx-auto px-3 py-16">
                {/* Serving Method OrderDetailsSkeleton */}
                <div className="mb-6">
                    <div className="text-lg font-semibold mb-4">
                        <Skeleton className='w-1/4 h-6'/>
                    </div>
                    <div className="flex gap-4">
                        <Skeleton className="w-24 h-8 rounded-md"/>
                        <Skeleton className="w-24 h-8 rounded-md"/>
                        <Skeleton className="w-24 h-8 rounded-md"/>
                    </div>
                </div>

                {/* Dynamic Form Fields OrderDetailsSkeleton */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                        <Skeleton className='w-2/4 h-6'/>
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <Skeleton className='w-full h-10 mb-4 rounded-md'/>
                        </div>
                        <div>
                            <Skeleton className='w-full h-10 mb-4 rounded-md'/>
                        </div>
                    </div>
                    {/* Repeat similar skeletons for other input fields */}
                </div>

                {/* Order Summary OrderDetailsSkeleton */}
                <div className="text-lg font-semibold mb-4">
                    <Skeleton className='w-1/4 h-6'/>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full max-w-4xl bg-white border border-gray-200">
                        <thead>
                        <tr className='bg-gray-100 whitespace-nowrap'>
                            <th className="p-4 text-left border-b"><Skeleton className='w-24 h-6'/></th>
                            <th className="p-4 text-left border-b"><Skeleton className='w-32 h-6'/></th>
                            <th className="p-4 text-left border-b"><Skeleton className='w-12 h-6'/></th>
                            <th className="p-4 text-left border-b"><Skeleton className='w-16 h-6'/></th>
                            <th className="p-4 text-left border-b"><Skeleton className='w-20 h-6'/></th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from({length: 2}).map((_, i) => (
                            <tr key={i}>
                                <td className="p-4 border-b"><Skeleton className='w-16 h-16 rounded'/></td>
                                <td className="p-4 border-b">
                                    <Skeleton className='w-32 h-24 rounded'/>
                                </td>
                                <td className="p-4 border-b"><Skeleton className='w-12 h-6'/></td>
                                <td className="p-4 border-b"><Skeleton className='w-16 h-6'/></td>
                                <td className="p-4 border-b"><Skeleton className='w-20 h-6'/></td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td className="p-4"></td>
                            <td className="p-4"></td>
                            <td className="p-4"></td>
                            <td className="p-4 font-semibold"><Skeleton className='w-16 h-6'/></td>
                            <td className="p-4 font-semibold"><Skeleton className='w-20 h-6'/></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Payment Method OrderDetailsSkeleton */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                        <Skeleton className='w-1/4 h-6'/>
                    </h3>
                    <div className="flex gap-4">
                        <Skeleton className="w-24 h-8 rounded-md"/>
                        <Skeleton className="w-24 h-8 rounded-md"/>
                        <Skeleton className="w-24 h-8 rounded-md"/>
                    </div>
                </div>

                {/* Place Order Button OrderDetailsSkeleton */}
                <div className="mb-6">
                    <Skeleton className='w-full h-12 rounded-md'/>
                    <Skeleton className='w-full h-12 mt-4 rounded-md'/>
                </div>
            </div>
        </section>
    );
};

export default CheckoutSkeleton;
