import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSectionSkeleton from "../../skeleton/home/TestimonialSectionSkeleton.jsx";
import ReviewStore from "../../store/ReviewStore.js";
import StarRatings from "react-star-ratings";
import testimonialBG from "../../assets/img/testimonial-bg.jpg"

const TestimonialSection = () => {
    const {ReviewList} = ReviewStore()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="py-16 text-black text-opacity-20" style={{ backgroundImage: `url(${testimonialBG})`}}>
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                {ReviewList === null ? (
                    <TestimonialSectionSkeleton /> // Display skeleton loader while loading
                ) : (
                    <>
                        <h2 className="text-3xl font-extrabold text-black text-opacity-90">What Our Clients Are Saying?</h2>
                        <Slider {...settings} className="mt-8">
                            {
                                ReviewList.map((item,i)=>{
                                    return (
                                        <div key={i} className="px-8">
                                            <p className="text-lg italic text-black text-opacity-50 mb-4">
                                                &quot; {item['comment']} &quot;
                                            </p>
                                            <div className="flex justify-center items-center">
                                                <div
                                                    className='h-12 w-12 rounded-full object-cover overflow-hidden mr-4'>
                                                    <img src={item['customer']['photo']}
                                                         alt={item['customer']['firstName']}
                                                         className="w-full h-full"
                                                    />
                                                </div>
                                                <div className='flex flex-col items-start justify-start'>
                                                    <p className="text-lg font-medium text-black text-opacity-90">{item['customer']['firstName'] + ' ' + item['customer']['lastName']}</p>
                                                    <div className="flex justify-center items-center mb-4">
                                                        <StarRatings
                                                            rating={parseFloat(item['rating'])}
                                                            starRatedColor="red"
                                                            numberOfStars={5}
                                                            starDimension="15px"
                                                            starSpacing="1px"
                                                        />
                                                        <span
                                                            className="ml-2 text-black text-opacity-50">({item['rating']})</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </>
                )}
            </div>
        </div>
    );
};

export default TestimonialSection;
