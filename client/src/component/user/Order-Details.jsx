import React, {useEffect, useState} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import InvoiceStore from "../../store/InvoiceStore.js";
import OrderDetailsSkeleton from "../../skeleton/user/OrderDetailsSkeleton.jsx";

const OrderDetails = () => {
    const {InvoiceDetails,InvoiceDetailsRequest} = InvoiceStore()
    const [loading, setLoading] = useState(true);

    // Simulate data fetching delay
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (InvoiceDetails === null || loading) {
        return <OrderDetailsSkeleton />
    }else{
        return (
            <section className='bg-bg-secondary w-full p-4 sm:p-6'>
                <div className="container mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                        <h2 className="text-black text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Order [{InvoiceDetails.delivery_status}]</h2>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <button
                                onClick={window.print}
                                className="bg-primary hover:bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded flex items-center">
                                <FaDownload className="mr-2"/>
                                Download Invoice
                            </button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="text-black flex-1">
                                <h3 className="font-semibold">Order</h3>
                                <p>Serving Method: {InvoiceDetails.serving_Method}</p>
                                <p>Total Amount: ${InvoiceDetails.total.slice(0,4)}</p>
                                <p>Tax: ${InvoiceDetails.vat.slice(0,4)}</p>
                                <p>Shipping Charge: ${InvoiceDetails.shipping.slice(0,4)}</p>
                                <p>Paid Amount: ${InvoiceDetails.payable.slice(0,4)}</p>
                                <p>Payment Method: Online Payment</p>
                                <p>Payment Status: <span className="text-red-500">{InvoiceDetails.payment_status}</span></p>
                                <p>Time: {InvoiceDetails.createdAt.slice(0,10)}</p>
                            </div>
                            <div className="text-black flex-1">
                                <h3 className="font-semibold">Shipping Details</h3>
                                {
                                    InvoiceDetails.ship_details.split(', ').map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))
                                }
                            </div>
                            <div className="text-black flex-1">
                                <h3 className="font-semibold">Billing Details</h3>
                                {
                                    InvoiceDetails.cus_details.split(', ').map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-black text-xl font-semibold mb-4">Ordered Products</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto border-collapse">
                                <thead>
                                <tr className="bg-white text-black whitespace-nowrap">
                                    <th className="p-2 text-left font-semibold border-b">
                                        #
                                    </th>
                                    <th className="p-2 text-left font-semibold border-b">
                                        Product
                                    </th>
                                    <th className="p-2 text-left font-semibold border-b">
                                        Product Title
                                    </th>
                                    <th className="p-2 text-left font-semibold border-b">
                                        Price
                                    </th>
                                    <th className="p-2 text-left font-semibold border-b">
                                        QTY
                                    </th>
                                    <th className="p-2 text-left font-semibold border-b">
                                        Total
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    InvoiceDetailsRequest.map((item, index) => {
                                        return (
                                            <tr key={index} className="text-black whitespace-nowrap">
                                                <td className="p-2 border-b">{index+1}</td>
                                                <td className="p-2">
                                                    <img
                                                        src={item['product'].image}
                                                        alt={item['product'].name}
                                                        className="h-12 w-12 object-cover"
                                                    />
                                                </td>
                                                <td className="p-2 border-b">{item['product'].name}</td>
                                                <td className="p-2 border-b">${item['product'].price}</td>
                                                <td className="p-2 border-b">{item['qty']}</td>
                                                <td className="p-2 border-b">${item['product'].price * item['qty']}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <a href='/orders' className="flex items-center text-blue-500">
                        <FaArrowLeft className="mr-2"/>
                        Back
                    </a>
                </div>
            </section>
        );
    }
};

export default OrderDetails;
