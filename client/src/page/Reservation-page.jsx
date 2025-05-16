import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Reservation from "../component/about/Reservation.jsx";

const ReservationPage = () => {
    return (
        <Layout>
            <BannerSection title={'Reservation'}/>
            <Reservation/>
        </Layout>
    );
};

export default ReservationPage;