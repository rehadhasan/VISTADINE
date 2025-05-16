import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import ForgotPassword from "../component/user/ForgotPassword.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";

const ForgotPasswordPage = () => {
    return (
        <Layout>
            <BannerSection title={'Forgot Password'}/>
            <ForgotPassword/>
        </Layout>
    );
};

export default ForgotPasswordPage;