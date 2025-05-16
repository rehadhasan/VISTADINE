import React, {useEffect, useState} from 'react';
import {MdDeleteOutline} from "react-icons/md";
import WishStore from "../../store/WishStore.js";
import toast from "react-hot-toast";
import Modal from "../../ui/items/details/Modal.jsx";
import WishlistSkeleton from "../../skeleton/wish/WishlistSkeleton.jsx";

const Wishlist = () => {
    const {WishList,RemoveWishRequest, WishListRequest} = WishStore()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productID, setProductID] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState()
    const [loading, setLoading] = useState(true);  // Loading state for skeleton

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);

    const handleAddToCart = (productID, name, price, size) => {
        setIsModalOpen(true);
        setProductID(productID)
        setName(name)
        setPrice(price)
        setSize(size)
    };

    const handleConfirmAddToCart = () => {
        setIsModalOpen(false);
    };

    const handleRemove = async (productID) => {
        let res = await RemoveWishRequest(productID)
        if(res){
            toast.success("Item Remove Successfully")
            await WishListRequest()
        }else{
            toast.error("Something went wrong !")
        }
    }

    return (
        <div className='w-full bg-bg-secondary p-6'>
            <div className="bg-white w-full p-4 rounded-lg">
                <h3 className='text-xl font-medium text-black'>WishList</h3>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full bg-white">
                        <thead>
                        <tr className="w-full bg-primary text-white border-b whitespace-nowrap">
                            <th className="text-left p-4 font-semibold">#</th>
                            <th className="text-left p-4 font-semibold">Product Image</th>
                            <th className="text-left p-4 font-semibold">Product Name</th>
                            <th className="text-left p-4 font-semibold">Description</th>
                            <th className="text-left p-4 font-semibold">Price</th>
                            <th className="text-center p-4 font-semibold">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            loading || WishList === null ? (
                                    <WishlistSkeleton />  // Show skeleton while loading
                                ) : (
                                WishList.length !== 0?(
                                    WishList.map((item,i) => (
                                        <tr key={i.toString()} className="border-b whitespace-nowrap">
                                            <td className="p-4">
                                                <button
                                                    onClick={()=>handleRemove(item['product']['_id'])}
                                                    className='text-lg text-primary'>
                                                    <MdDeleteOutline />
                                                </button>
                                            </td>
                                            <td className="p-4">
                                                <img
                                                    src={item['product'].image}
                                                    alt={item['product'].name}
                                                    className="w-16 h-16 rounded"
                                                />
                                            </td>
                                            <td className="p-4">
                                                <h3 className="text-black font-semibold">{item['product'].name}</h3>
                                            </td>
                                            <td className="p-4">
                                                <p className="text-sm text-black whitespace-pre-line">
                                                    Spice Level: {item['product'].Spicy_Level}
                                                </p>
                                                <p className="text-sm text-black whitespace-pre-line">
                                                    Vegetarian: {item['product'].Vegetarian}
                                                </p>
                                                <p className="text-sm text-black whitespace-pre-line">
                                                    Gluten Free: {item['product'].Gluten_Free}
                                                </p>
                                            </td>
                                            <td className="text-black p-4">${item['product'].discount ? (item['product'].discountPrice) : (item['product'].price)}</td>
                                            <td className="p-4 flex items-center justify-center">
                                                <button
                                                    onClick={()=>handleAddToCart(item['product']._id, item['product'].name, item['product'].discount?item['product'].discountPrice:item['product'].price, item['product'].size)}
                                                    className='px-3 py-2 bg-primary text-white rounded'>
                                                    Add To Cart
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ): (
                                    <tr>
                                        <td colSpan="6" className="p-4 text-center">
                                            {/* Display OrderDetailsSkeleton Loader or No Items Message */}
                                            <div className="text-black text-opacity-60">No items in the wishlist yet.</div>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal for Add to Cart */}
            <Modal
                productID={productID}
                name={name}
                price={price}
                Size={size}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmAddToCart}
            />
        </div>
    );
};

export default Wishlist;
