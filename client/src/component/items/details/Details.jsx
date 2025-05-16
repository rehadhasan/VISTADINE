import React, {useEffect, useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import StarRatings from 'react-star-ratings';
import Modal from "../../../ui/items/details/Modal.jsx";
import DetailsSkeleton from "../../../skeleton/items/DetailsSkeleton.jsx";
import ProductStore from "../../../store/ProductStore.js";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import {useParams} from "react-router-dom";
import WishStore from "../../../store/WishStore.js";
import toast from "react-hot-toast";
import UserStore from "../../../store/UserStore.js";

const Details = () => {
    const {productID} = useParams()
    const {productDetails,ReviewListByProduct,ReviewCount} = ProductStore()
    const {SaveWishRequest, WishDetailsRequest, WishDetails, RemoveWishRequest} = WishStore()
    const {isLogin} = UserStore()

    const [selectedImage, setSelectedImage] = useState(productDetails.image || '');
    const [activeTab, setActiveTab] = useState('description');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ratings = ReviewListByProduct.map(item => parseFloat(item.rating));
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

    const images = [
        productDetails.details.img1,
        productDetails.details.img2,
        productDetails.details.img3,
        productDetails.details.img4,
    ].filter(Boolean);

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const handleConfirmAddToCart = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        (async ()=>{
            if(isLogin()){
                await WishDetailsRequest(productID)
            }
        })()
    }, [productID]);

    const handleFavorite = async () => {
        let res = await SaveWishRequest(productID)
        if(res){
            toast.success("This item added to your wishlist.")
            await WishDetailsRequest(productID)
        }else{
            toast.error("Something went wrong !")
        }
    }

    const handleRemoveFavorite = async () => {
        let res = await RemoveWishRequest(productID)
        if(res){
            toast.success("This item removed to your wishlist.")
            await WishDetailsRequest(productID)
        }else{
            toast.error("Something went wrong !")
        }
    }

    return (
        <section className='bg-white'>
            {productDetails === null ? (
                <DetailsSkeleton />
            ) : (
                <div className="max-w-4xl mx-auto px-3 py-16">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <div className='w-full h-96 object-cover overflow-hidden'>
                                <img
                                    src={selectedImage}
                                    alt="Product"
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="flex mt-4 space-x-2">
                                {images.map((img, index) => (
                                    <div key={index} className={`w-20 h-20 p-1 cursor-pointer border ${selectedImage === img ? 'border-primary' : 'border-black border-opacity-20'} rounded-lg overflow-hidden`} onClick={() => setSelectedImage(img)}>
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                            <div className='flex items-center gap-5'>
                                <h2 className="text-2xl font-bold mb-2">{productDetails.name}</h2>
                                {
                                    isLogin() ? (
                                        WishDetails !== null ? (
                                            WishDetails.length === 0 ? (
                                                <button onClick={handleFavorite} className='text-black'>
                                                    <CiHeart size={24}/>
                                                </button>
                                            ) : (
                                                <button onClick={handleRemoveFavorite} className='text-red-500'>
                                                    <FaHeart size={20}/>
                                                </button>
                                            )
                                        ) : ('')
                                    ) : (
                                        <a href='/login' className='text-black'>
                                            <CiHeart size={24}/>
                                        </a>
                                    )
                                }
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="flex">
                                    <StarRatings
                                        rating={parseInt(ReviewCount ? (averageRating) : ('0.0'))}
                                        starRatedColor="#d3a971"
                                        starDimension="15px"
                                        starSpacing="2px"
                                    />
                                </div>
                                <span className="ml-2 text-black text-opacity-50">({ReviewCount} reviews)</span>
                            </div>
                            {
                                productDetails.discount ? (
                                    <div className="text-xl font-semibold text-black text-opacity-80 mb-4">
                                        ${productDetails.discountPrice}.00 <span
                                        className="line-through text-black text-opacity-50">${productDetails.price}.00</span>
                                    </div>
                                ) : (
                                    <div className="text-xl font-semibold text-black text-opacity-80 mb-4">
                                        ${productDetails.price}.00
                                    </div>
                                )
                            }
                            <p className="test-sm text-black font-medium text-opacity-80 mb-2">
                                Spicy Level: <span className='font-normal'>{productDetails.details.Spicy_Level}</span>
                            </p>
                            <p className="test-sm text-black font-medium text-opacity-80 mb-2">
                                Vegetarian: <span className='font-normal'>{productDetails.details.Vegetarian}</span>
                            </p>
                            <p className="test-sm text-black font-medium text-opacity-80 mb-2">
                                Gluten Free: <span className='font-normal'>{productDetails.details.Gluten_Free}</span>
                            </p>
                            <p className="text-black text-opacity-70 mb-4">
                                {productDetails.shortDes}..
                            </p>

                            <div className="flex items-center">
                                {
                                    isLogin() ? (
                                        <button
                                            onClick={handleAddToCart}
                                            className="bg-primary text-white py-2 px-4 rounded-lg flex items-center hover:bg-primary">
                                            <FaShoppingCart className="mr-2"/> Add to Cart
                                        </button>
                                    ) : (
                                        <a
                                            href='/login'
                                            className="bg-primary text-white py-2 px-4 rounded-lg flex items-center hover:bg-primary">
                                            <FaShoppingCart className="mr-2"/> Add to Cart
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-b text-black text-opacity-20">
                        <nav className="flex space-x-4">
                            <button
                                className={`py-2 px-4 border-b-2 ${activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-black text-opacity-60'} hover:text-primary`}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                            <button
                                className={`py-2 px-4 border-b-2 ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent text-black text-opacity-60'} hover:text-primary`}
                                onClick={() => setActiveTab('reviews')}
                            >
                                Reviews
                            </button>
                        </nav>
                    </div>

                    <div className="mt-6">
                        {activeTab === 'description' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                                <p className="text-black text-opacity-60">
                                    {productDetails.details.description}
                                </p>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                                {
                                    ReviewListByProduct !== null?(
                                        ReviewListByProduct.length > 0?(
                                            ReviewListByProduct.map((item,i)=>{
                                                return(
                                                    <div key={i.toString()} className="border p-4 rounded-lg shadow-sm">
                                                        <div className="flex md:flex-row flex-col items-center gap-3">
                                                            <div className='w-[60px] h-[60px] rounded-full object-cover overflow-hidden bg-black'>
                                                                <img className='w-full h-full' src={item['customer']['photo']} alt={item['customer']['firstName']}/>
                                                            </div>
                                                            <div className='flex flex-col md:items-start items-center text-center'>
                                                                <div>
                                                                    <StarRatings
                                                                        rating={parseInt(item.rating)}
                                                                        starRatedColor="#d3a971"
                                                                        starDimension="15px"
                                                                        starSpacing="2px"
                                                                    />
                                                                </div>
                                                                <span
                                                                    className="text-black text-opacity-60 mb-2">
                                                                {item['customer']['firstName']} {item['customer']['lastName']} - {item.createdAt.slice(0, 10)}
                                                            </span>
                                                                <p className="text-black text-opacity-70">
                                                                    {item.comment}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ): (
                                            <div className="lg:col-span-3 md:col-span-2">
                                                <div className="text-center py-10">
                                                    <h2 className="text-lg font-semibold">No Reviews Yet !</h2>
                                                </div>
                                            </div>
                                        )
                                    ) : ('')
                                }
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Modal for Add to Cart */}
            <Modal
                productID={productDetails._id}
                name={productDetails.name}
                price={productDetails.discount?productDetails.discountPrice:productDetails.price}
                Size={productDetails.details.size}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmAddToCart}
            />
        </section>
    );
};

export default Details;
