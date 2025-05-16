import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Contact from "../component/contact/Contact.jsx";

const ContactPage = () => {
    return (
        <Layout>
            <BannerSection title="Contact" />
            <Contact/>
        </Layout>
    );
};

export default ContactPage;