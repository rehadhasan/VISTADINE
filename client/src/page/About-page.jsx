import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import About from "../component/about/About.jsx";

const AboutPage = () => {
    return (
        <Layout>
            <BannerSection title={'About Us'}/>
            <About/>
        </Layout>
    );
};

export default AboutPage;