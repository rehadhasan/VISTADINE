import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import Login from "../component/user/Login.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";

const LoginPage = () => {
    return (
        <Layout>
            <BannerSection title={'Login'}/>
            <Login/>
        </Layout>
    );
};

export default LoginPage;