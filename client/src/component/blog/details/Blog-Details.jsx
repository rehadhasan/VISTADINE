import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon
} from 'react-share';
import {Link, useParams} from "react-router-dom";
import BlogDetailsSkeleton from "../../../skeleton/blog/BlogDetailsSkeleton.jsx";
import BlogStore from "../../../store/BlogStore.js";
import toast from "react-hot-toast";

const BlogDetails = () => {
    const {blogID} = useParams()
    const {BlogDetails,BlogList,SaveCommentRequest,CommentListRequest,CommentList} = BlogStore()
    const [comment, setComment] = useState('');
    const [commentCount, setCommentCount] = useState(3)
    const [loading, setLoading] = useState(true);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async () => {
        let postBody = {blogID:blogID, feedback:comment}
        if(comment !== ''){
            let res = await SaveCommentRequest(postBody)
            if(res){
                toast.success("Comment saved successfully.")
                await CommentListRequest(blogID)
            }else{
                toast.error("Something went wrong.")
            }
        }else{
            toast.error("Please write something !")
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500); // Simulate a 1-second loading time
    }, []);

    const shareUrl = window.location.href;
    const title = `${BlogDetails !== null?BlogDetails['title']:''}`;

    if (BlogDetails === null || BlogList === null || CommentList === null || loading){
        return <BlogDetailsSkeleton />;
    }else{
        return (
            <section className='bg-white'>
                <div className="container mx-auto px-3 py-16">
                    <div className="flex flex-col lg:flex-row">
                        <main className="lg:w-2/3 lg:pr-8">
                            <div className='w-full md:h-96 h-64 object-cover overflow-hidden rounded-lg mb-4'>
                                <img
                                    src={BlogDetails.image}
                                    alt="Cooking"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="flex items-center space-x-2 text-black text-opacity-70 mb-4">
                                <FaRegClock className='text-primary'/>
                                <span>{BlogDetails.createdAt.slice(0,10)}</span>
                            </div>
                            <h1 className="text-4xl font-bold mb-4 text-black">{BlogDetails.title}</h1>
                            <article className="text-lg leading-8 text-black text-opacity-70">
                                <p>
                                    {BlogDetails.content}..
                                </p>
                            </article>

                            {/* Share Buttons */}
                            <section className="mt-8">
                                <h2 className="text-2xl font-bold mb-4 text-black">Share:</h2>
                                <div className="flex space-x-4">
                                    <FacebookShareButton url={shareUrl} quote={title}>
                                        <FacebookIcon size={40} round/>
                                    </FacebookShareButton>
                                    <TwitterShareButton url={shareUrl} title={title}>
                                        <TwitterIcon size={40} round/>
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={shareUrl} title={title}>
                                        <LinkedinIcon size={40} round/>
                                    </LinkedinShareButton>
                                    <WhatsappShareButton url={shareUrl} title={title}>
                                        <WhatsappIcon size={40} round/>
                                    </WhatsappShareButton>
                                </div>
                            </section>

                            {/* Comment Section */}
                            <section className="mt-8">
                                <h2 className="text-2xl font-bold mb-4 text-black">Leave a Comment</h2>
                                <div>
                            <textarea
                                className="w-full p-4 mb-4 border border-primary bg-white text-black outline-none focus:outline-none rounded-lg"
                                placeholder="Enter your comment..."
                                value={comment}
                                onChange={handleCommentChange}
                                rows="5"
                            />
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary"
                                    >
                                        Submit Comment
                                    </button>
                                </div>
                            </section>

                            {/* Display Public Comments */}
                            <section className="mt-8">
                                <h2 className="text-2xl font-bold mb-4 text-black">Comments ({CommentList.length})</h2>
                                <ul>
                                    {
                                        CommentList !== null?(
                                            CommentList.slice(0,commentCount).map((comment)=>{
                                                return (
                                                    <li key={comment.id}
                                                        className="mb-4 p-4 text-black bg-primary bg-opacity-10 rounded-lg">
                                                        <span>{comment.feedback}</span>
                                                    </li>
                                                )
                                            })
                                        ) : ('')
                                    }
                                </ul>
                                {
                                    CommentList.length > 3?(
                                        CommentList.length > commentCount?(
                                            <button
                                                onClick={()=>setCommentCount(commentCount+3)}
                                                className='text-black font-medium underline mt-5'>
                                                See more
                                            </button>
                                        ): (
                                            <button
                                                onClick={() => setCommentCount(3)}
                                                className='text-black font-medium underline mt-5'>
                                                See less
                                            </button>
                                        )
                                    ):('')
                                }
                            </section>
                        </main>
                        <aside className="lg:w-1/3 mt-8 lg:mt-0">
                            {/* Recent Blogs */}
                            <div className="bg-black bg-opacity-5 p-4 rounded-lg">
                                <h3 className="text-xl font-bold mb-4 text-black">Recent Blogs</h3>
                                <ul>
                                    {
                                        BlogList !== null?(
                                            BlogList.slice(0,4).map((blog) => (
                                                <li key={blog.id} className="mb-4">
                                                    <Link to="/blog/details" className="text-black text-opacity-70 hover:text-black font-bold">{blog.title}</Link>
                                                    <p className="text-gray-500">{blog.createdAt.slice(0,10)}</p>
                                                </li>
                                            ))
                                        ):('')
                                    }
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        );
    }
};

export default BlogDetails;
