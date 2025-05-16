import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Blog from "../component/blog/Blog.jsx";
import BlogStore from "../store/BlogStore.js";

const BlogPage = () => {
    const {BlogListRequest} = BlogStore()

    useEffect(() => {
        (async ()=>{
            await BlogListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Our Blog'}/>
            <Blog/>
        </Layout>
    );
};

export default BlogPage;