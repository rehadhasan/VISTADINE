import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpecialOffersSkeleton from "../../skeleton/home/SpecialOffersSkeleton.jsx";
import ProductStore from "../../store/ProductStore.js";
import Modal from "../../ui/items/details/Modal.jsx";
import UserStore from "../../store/UserStore.js";
import {Link} from "react-router-dom";

const SpecialOffers = () => {
    const {ProductListByRemark} = ProductStore()
    const {isLogin} = UserStore()
    const [productID, setProductID] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const handleConfirmAddToCart = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {ProductListByRemark === null ? (
                    <SpecialOffersSkeleton /> // Display skeleton loader while loading
                ) : (
                    <>
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Our Special Offered Items Price
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Slider {...settings}>
                                {
                                    ProductListByRemark.map((item,i)=>{
                                        return (
                                            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                                                {
                                                    item.discount?(
                                                        <h3 className="text-2xl font-bold text-black text-opacity-80">${item.discountPrice}.00 <span
                                                            className="line-through text-black text-opacity-40">${item.price}.50</span>
                                                        </h3>
                                                    ): (
                                                        <h3 className="text-2xl font-bold text-black text-opacity-80">${item.price}.00</h3>
                                                    )
                                                }
                                                <p className="text-lg text-black text-opacity-60">{item.name}</p>
                                                <p className="text-gray-500">{item.shortDes}..</p>
                                                <div className='w-full h-96 object-cover'>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name} className="w-full h-full mt-4"/>
                                                </div>
                                                {
                                                    isLogin()?(
                                                        <button
                                                            onClick={async () => {
                                                                await handleAddToCart(); // Add parentheses to call the function
                                                                setProductID(item._id); // No need to await for state updates
                                                                setName(item.name);
                                                                setPrice(item.discount ? item.discountPrice : item.price);
                                                                setSize(item.size);
                                                            }}
                                                            className="mt-4 border border-primary hover:bg-primary text-primary hover:text-white px-4 py-2 rounded">Add
                                                            to Cart
                                                        </button>
                                                    ): (
                                                        <Link
                                                            to='/login'
                                                            className="mt-4 border border-primary hover:bg-primary text-primary hover:text-white px-4 py-2 rounded">Add
                                                            to Cart
                                                        </Link>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                            <div
                                className='rounded md:flex flex-col items-center justify-center hidden w-full h-full bg-black text-white'>
                                <ul className='text-[65px] text-bold'>
                                    <li>Our</li>
                                    <li>Special</li>
                                    <li>Items</li>
                                    <li>Offered</li>
                                    <li>Price</li>
                                </ul>
                                <a
                                    href={'/items/foods'}
                                    className='btn w-60 mt-3 border border-primary bg-black hover:bg-primary text-primary hover:text-white'>
                                    Discover More Foods
                                </a>
                            </div>
                        </div>
                    </>
                )}
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

export default SpecialOffers;
