import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import ResetPassword from "../component/user/ResetPassword.jsx";

const ResetPasswordPage = () => {
    return (
        <Layout>
            <BannerSection title={'Reset Password'} />
            <ResetPassword/>
        </Layout>
    );
};

export default ResetPasswordPage;