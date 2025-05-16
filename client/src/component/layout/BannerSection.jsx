import React from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import {IoHomeOutline} from "react-icons/io5";

const BannerSection = (props) => {
    return (
        <section className='bg-bg-primary'>
            <div className='container mx-auto px-3 py-16'>
                <div className='text-white flex flex-col items-center justify-center'>
                    <h3 className='md:text-7xl text-5xl font-bold text-center leading-normal'>{props.title}</h3>
                    <div className='flex items-center gap-2 mt-3'>
                        <IoHomeOutline size={40}/>
                        <a href='/' className='text-lg'>Home</a>
                        <MdKeyboardArrowRight size={24}/>
                        <span className='text-lg text-primary'>{props.title}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;