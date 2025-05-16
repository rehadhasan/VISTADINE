import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SliderSkeleton from "../../skeleton/home/SliderSkeleton.jsx";
import ProductStore from "../../store/ProductStore.js";
import {Link} from "react-router-dom";

const CustomSlider = () => {
    const {SliderList} = ProductStore()

    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 z-10 cursor-pointer text-white bg-primary bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
                onClick={onClick}
            >
                <FaArrowRight className="text-xl" />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 z-10 cursor-pointer text-white bg-primary bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
                onClick={onClick}
            >
                <FaArrowLeft className="text-xl" />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className='bg-bg-primary'>
            <div className='container mx-auto px-3'>
                <div className="relative w-full">
                    {SliderList === null ? (
                        <SliderSkeleton /> // Show skeleton loader while loading
                    ) : (
                        <Slider {...settings}>
                            {
                                SliderList.map((item,i)=>{
                                    return (
                                        <div key={i.toString()}>
                                            <div className='flex md:flex-row flex-col-reverse items-center py-10'>
                                                <div className="md:w-1/2 w-full text-white lg:px-20 md:mt-0 mt-4">
                                                    <h2 className="text-4xl font-bold">{item.title}</h2>
                                                    <p className="mt-2">{item.description.slice(0,100)}...</p>
                                                    <div className="mt-8">
                                                        <Link to={`/item/details/${item.productID}`} className="bg-primary text-white py-2 px-4 rounded mr-2">
                                                            Buy Now
                                                        </Link>
                                                        <a
                                                            href='/reservation'
                                                            className="border border-primary hover:bg-primary text-white py-2 px-4 rounded">Book
                                                            a Table
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='md:w-1/2 w-full h-full object-cover'>
                                                    <img className='w-full h-full'
                                                         src={item.image}
                                                         alt='item'/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CustomSlider;
