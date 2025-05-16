import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import TermsAndConditions from "../component/about/TermsAndConditions.jsx";

const TermsAndConditionsPage = () => {
    return (
        <Layout>
            <BannerSection title={'Terms And Conditions'}/>
            <TermsAndConditions/>
        </Layout>
    );
};

export default TermsAndConditionsPage;