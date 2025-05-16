import React, {useState} from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Modal from "./details/Modal.jsx";
import UserStore from "../../store/UserStore.js";
import {Link} from "react-router-dom";

const ProductCard = ({ product }) => {
    const {isLogin} = UserStore()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const handleConfirmAddToCart = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className='w-full h-52 object-cover overflow-hidden'>
                <img src={product.image} alt={product.name} className="w-full h-full mb-4"/>
            </div>
            <a href={`/item/details/${product._id}`}><h3 className="text-lg font-semibold text-black mt-3">{product.name}</h3></a>
            <span className='text-black text-opacity-70'>{product.shortDes}..</span>
            {
                product.discount ? (
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-primary font-bold">${product.discountPrice}</span>
                        <span className="line-through text-black text-opacity-40">${product.price}</span>
                    </div>
                ) : (
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-primary text-opacity-50 font-bold">${product.price}</span>
                    </div>
                )
            }
            {
                isLogin()?(
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 bg-primary text-white py-2 px-4 rounded-lg flex items-center justify-center w-full">
                        <FiShoppingCart className="mr-2"/>
                        Add To Cart
                    </button>
                ): (
                    <Link
                        to='/login'
                        className="mt-4 bg-primary text-white py-2 px-4 rounded-lg flex items-center justify-center w-full">
                        <FiShoppingCart className="mr-2"/>
                        Add To Cart
                    </Link>
                )
            }

            {/* Modal for Add to Cart */}
            <Modal
                productID={product._id}
                name={product.name}
                price={product.discount ? product.discountPrice : product.price}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmAddToCart}
            />
        </div>
    );
};

export default ProductCard;
