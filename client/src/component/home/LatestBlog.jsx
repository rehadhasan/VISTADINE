import React from 'react';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import LatestBlogSkeleton from "../../skeleton/home/LatestBlogSkeleton.jsx";
import BlogStore from "../../store/BlogStore.js";

const LatestBlog = () => {
    const {BlogList} = BlogStore()

    return (
        <div className="bg-white py-16">
            {BlogList === null ? (
                <LatestBlogSkeleton /> // Display skeleton loader while loading
            ) : (
                <>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-black">Latest News Feeds</h2>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
                        {
                            BlogList.slice(0,2).map((item,i)=>{
                                return (
                                    <div key={i} className="md:w-1/2">
                                        <div className="relative">
                                            <div
                                                className='w-full md:h-80 h-64 rounded-lg object-cover overflow-hidden'>
                                                <img className="w-full h-full"
                                                     src={item['image']}
                                                     alt={item['title']}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-2xl font-semibold text-black">{item['title']}</h3>
                                            <p className="text-black text-opacity-60 mt-2">{item['content'].slice(0,100)}..</p>
                                            <div className="flex items-center mt-4 text-gray-500">
                                                <FaCalendarAlt className='text-primary'/>
                                                <span className="ml-2">{item['createdAt'].slice(0,10)}</span>
                                                <FaUserAlt className="ml-4 text-primary"/>
                                                <span className="ml-2">Admin</span>
                                            </div>
                                            <button
                                                className="mt-4 bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            )}
        </div>
    );
};

export default LatestBlog;
