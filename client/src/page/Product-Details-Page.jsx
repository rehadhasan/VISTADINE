import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Details from "../component/items/details/Details.jsx";
import {useParams} from "react-router-dom";
import ProductStore from "../store/ProductStore.js";
import DetailsSkeleton from "../skeleton/items/DetailsSkeleton.jsx";

const ProductDetailsPage = () => {
    const {productID} = useParams()
    const {productDetailsRequest,productDetails,ReviewListByProductRequest} = ProductStore()

    useEffect(() => {
        (async ()=>{
            await ReviewListByProductRequest(productID)
            await productDetailsRequest(productID)
        })()
    }, [productID]);

    if(productDetails === null){
        return (
            <Layout>
                <BannerSection title={'Item Details'}/>
                <section className='bg-white'>
                    <DetailsSkeleton/>
                </section>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <BannerSection title={'Item Details'}/>
                <Details/>
            </Layout>
        );
    }
};

export default ProductDetailsPage;