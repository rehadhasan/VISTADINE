import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import CustomSlider from "../component/home/CustomSlider.jsx";
import Carousel from "../component/home/Carousel.jsx";
import AboutUs from "../component/home/AboutUs.jsx";
import Menu from "../component/home/Menu.jsx";
import SpecialOffers from "../component/home/SpecialOffers.jsx";
import TeamSection from "../component/home/TeamSection.jsx";
import TestimonialSection from "../component/home/TestimonialSection.jsx";
import LatestBlog from "../component/home/LatestBlog.jsx";
import MapSection from "../component/home/MapSection.jsx";
import ProductStore from "../store/ProductStore.js";
import TeamStore from "../store/TeamStore.js";
import ReviewStore from "../store/ReviewStore.js";
import BlogStore from "../store/BlogStore.js";

const HomePage = () => {
    const {SliderListRequest,CategoryListRequest,MenuProductListRequest,ProductListByRemarkRequest} = ProductStore()
    const {TeamListRequest} = TeamStore()
    const {ReviewListRequest} = ReviewStore()
    const {BlogListRequest} = BlogStore()

    useEffect(() => {
        (async ()=>{
            await SliderListRequest()
            await CategoryListRequest()
            await MenuProductListRequest()
            await ProductListByRemarkRequest('special')
            await TeamListRequest()
            await ReviewListRequest()
            await BlogListRequest()
        })()
    }, []);
    return (
        <Layout>
            <CustomSlider/>
            <Carousel/>
            <AboutUs/>
            <Menu/>
            <SpecialOffers/>
            <TeamSection/>
            <TestimonialSection/>
            <LatestBlog/>
            <MapSection/>
        </Layout>
    );
};

export default HomePage;