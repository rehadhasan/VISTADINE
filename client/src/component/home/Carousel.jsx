import React from "react";
import Slider from "react-slick";
import CarouselSkeleton from "../../skeleton/home/CarouselSkeleton.jsx";
import ProductStore from "../../store/ProductStore.js";

const Carousel = () => {
    const {CategoryList} = ProductStore()

    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} text-gray-700`}
                style={{ ...style, display: "block", right: "10px" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} text-gray-700`}
                style={{ ...style, display: "block", left: "10px", zIndex: "1" }}
                onClick={onClick}
            />
        );
    }

    return (
        <section className='bg-bg-secondary'>
            <div className='container mx-auto px-3 py-10'>
                {CategoryList === null ? (
                    <CarouselSkeleton /> // Show skeleton loader while loading
                ) : (
                    <Slider {...settings}>
                        {
                            CategoryList.map((item,i)=>{
                                return (
                                    <div key={i} className="p-2">
                                        <div className="bg-white p-4 shadow-md rounded flex flex-col items-center">
                                            <div className='w-[120px] h-[120px] object-cover'>
                                                <img src={item.image} alt={item.name}
                                                     className="w-full h-full mb-2 rounded"/>
                                            </div>
                                            <span
                                                className="text-center text-lg font-semibold text-black">{item.name}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                )}
            </div>
        </section>
    );
};

export default Carousel;
