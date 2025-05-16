import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import PrivacyPolicy from "../skeleton/about/PrivacyPolicy.jsx";

const PrivacyPolicyPage = () => {
    return (
        <Layout>
            <BannerSection title={'Privacy Policy'}/>
            <PrivacyPolicy/>
        </Layout>
    );
};

export default PrivacyPolicyPage;