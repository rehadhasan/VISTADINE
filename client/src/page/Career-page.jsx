import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Career from "../component/about/Career.jsx";
import CareerStore from "../store/CareerStore.js";

const CareerPage = () => {
    const {JobListRequest,JobCategoryListRequest} = CareerStore()

    useEffect(() => {
        (async ()=>{
            await JobCategoryListRequest()
            await JobListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Career'}/>
            <Career/>
        </Layout>
    );
};

export default CareerPage;