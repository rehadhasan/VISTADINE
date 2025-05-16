import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Gallery from "../component/about/Gallery.jsx";

const GalleryPage = () => {
    return (
        <Layout>
            <BannerSection title={'Gallery'}/>
            <Gallery/>
        </Layout>
    );
};

export default GalleryPage;