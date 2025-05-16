import React, {useEffect, useState} from 'react';
import InvoiceStore from "../../store/InvoiceStore.js";
import OrderSkeleton from "../../skeleton/user/OrderSkeleton.jsx";

const Order = () => {
    const {InvoiceList} = InvoiceStore()
    const [loading, setLoading] = useState(true);

    // Simulate data fetching delay
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (InvoiceList === null || loading) {
        return <OrderSkeleton />
    }else{
        return (
            <div className="w-full md:w-3/4 p-6">
                {/* My Orders Information */}
                <div className="bg-white p-6 shadow-md rounded">
                    <h2 className="text-black text-xl font-bold mb-4">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                            <tr className="bg-primary text-white whitespace-nowrap">
                                <th className="p-2 text-left font-semibold border-b">
                                    Order Number
                                </th>
                                <th className="p-2 text-left font-semibold border-b">
                                    Serving Method
                                </th>
                                <th className="p-2 text-left font-semibold border-b">Date</th>
                                <th className="p-2 text-left font-semibold border-b">
                                    Total Price
                                </th>
                                <th className="p-2 text-left font-semibold border-b">Status</th>
                                <th className="p-2 text-left font-semibold border-b">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                InvoiceList.length !== 0?(
                                    InvoiceList.map((invoice)=>{
                                        return (
                                            <tr key={invoice.id}
                                                className="text-black hover:bg-black hover:bg-opacity-5 whitespace-nowrap">
                                                <td className="p-2 border-b">{invoice.tran_id}</td>
                                                <td className="p-2 border-b">{invoice.serving_Method}</td>
                                                <td className="p-2 border-b">{invoice.createdAt.slice(0, 10)}</td>
                                                <td className="p-2 border-b">${invoice.payable}</td>
                                                <td className="p-2 border-b">{invoice.delivery_status}</td>
                                                <td className="p-2 border-b">
                                                    <a href={`/orders/details/${invoice._id}`}
                                                       className="text-primary font-semibold hover:underline">
                                                        Details
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ): (
                                    <tr>
                                        <td colSpan="6" className="p-4 text-center">
                                            {/* Display OrderDetailsSkeleton Loader or No Items Message */}
                                            <div className="text-black text-opacity-60">No orders yet.
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

export default Order;