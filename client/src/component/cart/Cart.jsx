import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CartStore from "../../store/CartStore.js";
import toast from "react-hot-toast";

const Cart = () => {
    const {CartList,RemoveCartRequest,CartListRequest} = CartStore()
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const [showAlert, setShowAlert] = useState(false);
    const [cartID, setCartID] = useState()

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);
    
    const handleDelete = async () => {
        let res = await RemoveCartRequest(cartID)
        if(res){
            toast.success("Item Removed Successfully !")
            await CartListRequest()
            setShowAlert(false);
        }else{
            toast.error("Something Went Wrong !")
        }
    }

    return (
        <section className='bg-white'>
            <div className="max-w-4xl mx-auto px-3 py-16">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-black border-opacity-20">
                        <thead>
                        <tr className='whitespace-nowrap text-black'>
                            <th className="p-4 text-left border-b-2 border-black border-opacity-20">Product</th>
                            <th className="p-4 text-left border-b-2 border-black border-opacity-20">Product Title</th>
                            <th className="p-4 text-left border-b-2 border-black border-opacity-20">Quantity</th>
                            <th className="p-4 text-left border-b-2 border-black border-opacity-20">Price</th>
                            <th className="p-4 text-left border-b-2 border-black border-opacity-20">Total</th>
                            <th className="p-4 text-left border-b-2 border-black border-opacity-20">Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {isLoading || CartList === null? (
                            // Render skeleton loaders while loading
                            Array(2)
                                .fill()
                                .map((_, i) => (
                                    <SkeletonLoader key={i} />
                                ))
                        ) : (
                            CartList.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center">
                                        {/* Display OrderDetailsSkeleton Loader or No Items Message */}
                                        <div className="text-black text-opacity-60">No items in the cart yet.</div>
                                    </td>
                                </tr>
                            ) : (
                                CartList.map((item, i) => {
                                    const qty = item.qty;
                                    const itemPrice = item['product'].discount ? item['product'].discountPrice : item['product'].price;
                                    const total = qty * itemPrice;

                                    return (
                                        <tr key={i}>
                                            <td className="p-4 border-b border-black border-opacity-20">
                                                <img
                                                    src={item['product'].image}
                                                    alt={item['product'].name}
                                                    className="w-16 h-16 rounded"
                                                />
                                            </td>
                                            <td className="p-4 border-b text-black">{item['product'].name}</td>
                                            <td className="p-4 border-b border-black border-opacity-20">
                                                <div className="flex items-center">
                                                    <span className='text-black text-base font-semibold'>{item.qty}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-black border-opacity-20 whitespace-nowrap text-black">
                                                <p>${itemPrice}.00</p>
                                            </td>
                                            <td className="p-4 border-b border-black border-opacity-20 text-black">${total}.00</td>
                                            <td className="p-4 border-b border-black border-opacity-20">
                                                <button
                                                    onClick={async () => { await setShowAlert(true); await setCartID(item._id); }}
                                                    className="text-black text-opacity-60 hover:text-primary">
                                                    <AiOutlineClose size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )
                        )}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-end mt-8">
                    {
                        CartList !== null?(
                            CartList.length === 0?(
                                <button
                                    className={`px-8 py-2 font-bold text-black uppercase rounded bg-black bg-opacity-30 hover:bg-black hover:bg-opacity-30 cursor-not-allowed`}
                                >
                                    Checkout
                                </button>
                            ): (
                                <a href={'/checkout'}
                                   className={`px-8 py-2 font-bold text-white uppercase rounded bg-primary hover:bg-primary hover:bg-opacity-90`}
                                >
                                    Checkout
                                </a>
                            )
                        ):('')
                    }
                </div>

                {showAlert && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-black text-xl font-semibold mb-4">Are you sure?</h2>
                            <p className="text-black mb-6">Do you really want to delete this item? This process cannot be undone.</p>
                            <div className="flex justify-end space-x-4">
                                <button
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                                    onClick={() => setShowAlert(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

// OrderDetailsSkeleton loader component for each cart item
const SkeletonLoader = () => {
    return (
        <tr>
            <td className="p-4 border-b border-black border-opacity-20">
                <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
            </td>
            <td className="p-4 border-b border-black border-opacity-20">
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
            </td>
            <td className="p-4 border-b border-black border-opacity-20">
                <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            </td>
            <td className="p-4 border-b border-black border-opacity-20 whitespace-nowrap">
                <div className="w-10 h-6 bg-gray-200 rounded animate-pulse"></div>
            </td>
            <td className="p-4 border-b border-black border-opacity-20">
                <div className="w-10 h-6 bg-gray-200 rounded animate-pulse"></div>
            </td>
            <td className="p-4 border-b border-black border-opacity-20">
                <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            </td>
        </tr>
    );
};

export default Cart;
