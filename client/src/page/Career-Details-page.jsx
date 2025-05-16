import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import JobDetails from "../component/about/JobDetails.jsx";
import CareerStore from "../store/CareerStore.js";
import {useParams} from "react-router-dom";

const CareerDetailsPage = () => {
    const {jobID} = useParams();
    const {ReadJobRequest} = CareerStore()

    useEffect(() => {
        (async ()=>{
            await ReadJobRequest(jobID)
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Career Details'}/>
            <JobDetails/>
        </Layout>
    );
};

export default CareerDetailsPage;