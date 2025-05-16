import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import OTPVerification from "../component/user/OTPVerification.jsx";

const OTPVerificationPage = () => {
    return (
        <Layout>
            <BannerSection title={'OTP Verification'}/>
            <OTPVerification/>
        </Layout>
    );
};

export default OTPVerificationPage;