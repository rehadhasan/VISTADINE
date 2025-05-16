import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import BlogSkeleton from "../../skeleton/blog/BlogSkeleton.jsx";
import BlogStore from "../../store/BlogStore.js";

const categories = ['lifestyle', 'travel', 'food'];

const Blog = () => {
    const {BlogList,BlogListByRemarkRequest,BlogListRequest} = BlogStore()
    console.log(BlogList)
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);

    // Simulate data fetching
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500); // Simulate a 2-second loading time
    }, []);

    if (BlogList === null || loading){
        return <BlogSkeleton />;
    }else{
        return (
            <section className='bg-white'>
                <div className="container mx-auto px-3 py-16">
                    <h2 className="text-center text-4xl font-bold text-black">Latest News Feeds</h2>

                    {/* Category buttons */}
                    <div className="flex justify-center space-x-4 mt-8 mb-12">
                        <button
                            className={`px-4 py-2 rounded-md ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-transparent text-primary border border-primary'}`}
                            onClick={async () => {await setSelectedCategory('all'); await BlogListRequest()}}
                        >
                            All
                        </button>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-md ${selectedCategory === category ? 'bg-primary text-white' : 'bg-transparent text-primary border border-primary'}`}
                                onClick={async () => {await setSelectedCategory(category); await BlogListByRemarkRequest(category)}}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {BlogList.map((blog, i) => (
                            <div key={i.toString()} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className='w-full h-64 object-cover overflow-hidden'>
                                <img className="w-full h-full" src={blog.image} alt={blog.title} />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-black">{blog.title}</h3>
                                    <p className="text-black text-opacity-70 mb-4">{blog.content.slice(0,100)}..</p>
                                    <div className="flex items-center text-black text-opacity-50 text-sm mb-4">
                                        <FaCalendarAlt className="mr-2 text-primary" />
                                        <span>{blog.createdAt.slice(0,10)}</span>
                                        <FaUser className="ml-4 mr-2 text-primary" />
                                        <span>Admin</span>
                                    </div>
                                    <Link to={`/blog/details/${blog._id}`} className="bg-transparent hover:bg-primary text-primary border border-primary hover:text-white px-4 py-2 rounded-md">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
};

export default Blog;
