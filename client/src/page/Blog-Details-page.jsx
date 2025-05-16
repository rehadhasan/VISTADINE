import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import BlogDetails from "../component/blog/details/Blog-Details.jsx";
import BlogStore from "../store/BlogStore.js";
import {useParams} from "react-router-dom";

const BlogDetailsPage = () => {
    const {blogID} = useParams()
    const {BlogDetailsRequest,BlogListRequest,CommentListRequest} = BlogStore()

    useEffect(() => {
        (async ()=>{
            await BlogDetailsRequest(blogID)
            await BlogListRequest()
            await CommentListRequest(blogID)
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title="Blog Details"/>
            <BlogDetails/>
        </Layout>
    );
};

export default BlogDetailsPage;