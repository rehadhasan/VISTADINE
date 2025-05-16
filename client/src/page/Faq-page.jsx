import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Faq from "../component/about/Faq.jsx";
import FaqStore from "../store/FaqStore.js";

const FaqPage = () => {
    const {FaqListRequest} = FaqStore()

    useEffect(() => {
        (async ()=>{
            await FaqListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'FAQ'}/>
            <Faq/>
        </Layout>
    );
};

export default FaqPage;