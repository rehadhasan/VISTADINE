import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import Signup from "../component/user/Signup.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";

const SignupPage = () => {
    return (
        <Layout>
            <BannerSection title={'Signup'}/>
            <Signup/>
        </Layout>
    );
};

export default SignupPage;