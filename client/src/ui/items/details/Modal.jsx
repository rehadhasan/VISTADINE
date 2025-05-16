import React, { useState } from 'react';
import {RxCross2} from "react-icons/rx";
import CartStore from "../../../store/CartStore.js";
import toast from "react-hot-toast";

const Modal = ({ isOpen, onClose, onConfirm,productID,name,price }) => {
    const {SaveCartRequest,CartListRequest} = CartStore()

    const [size, setSize] = useState('small, medium, large');
    const [quantity, setQuantity] = useState(1);

    if (!isOpen) return null;

    const AddToCart = async () => {
        if(size.length === 0){
            toast.error("Size is Required !")
        }else{
            let postBody = {productID:productID,size:size,qty:quantity}
            let res = await SaveCartRequest(postBody)
            if(res){
                await CartListRequest()
                toast.success("Item Added To Your Cart !")
                onConfirm({ size, quantity });
            }else{
                toast.error("Something Went wrong !")
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className='flex items-center justify-between'>
                    <h2 className="text-xl font-semibold">{name} <span className='text-primary'>(${price}.00)</span></h2>
                    <button
                        onClick={onClose}
                        className="text-black hover:text-primary p-2">
                        <RxCross2 size={24}/>
                    </button>
                </div>
                <hr className='bg-primary my-2'/>

                {/* Size Input */}
                <div className="mb-4">
                    <p className="text-lg font-medium text-black text-opacity-70a mb-1">Select Size</p>
                    <div className="flex flex-col space-y-2">
                        {/* eslint-disable-next-line react/prop-types */}
                        {size.split(', ').map((sizeOption) => (
                            <label key={sizeOption} className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="size"
                                    value={sizeOption}
                                    checked={size === sizeOption}
                                    onChange={() => setSize(sizeOption)}
                                    className="form-radio text-primary"
                                />
                                <span className="ml-2 whitespace-nowrap">{sizeOption}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <hr className='bg-primary my-2'/>

                <div className="flex items-center justify-between space-x-4">
                    {/* Quantity Input */}
                    <div className="flex items-center">
                        <button
                            onClick={() => quantity > 1 ? setQuantity(quantity - 1) : ""}
                            className="px-2 py-1 text-2xl font-bold text-primary bg-transparent rounded">-
                        </button>
                        <input
                            type="text"
                            value={quantity} // Update the quantity value dynamically
                            className="w-12 mx-2 text-center border border-black border-opacity-30 rounded"
                            readOnly
                        />
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-2 py-1 text-2xl font-bold text-primary bg-transparent rounded">+
                        </button>
                    </div>
                    <button
                        onClick={AddToCart}
                        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
