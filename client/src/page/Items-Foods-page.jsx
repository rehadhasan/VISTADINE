import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Foods from "../component/items/Foods.jsx";
import ProductStore from "../store/ProductStore.js";

const ItemsFoodsPage = () => {
    const {CategoryListRequest,ProductListRequest} = ProductStore()

    useEffect(() => {
        (async ()=>{
            await CategoryListRequest()
            await ProductListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Our Items'}/>
            <Foods/>
        </Layout>
    );
};

export default ItemsFoodsPage;