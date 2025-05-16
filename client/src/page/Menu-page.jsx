import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Menu from "../component/menu/Menu.jsx";
import ProductStore from "../store/ProductStore.js";

const MenuPage = () => {
    const {MenuProductListRequest} = ProductStore()

    useEffect(() => {
        (async ()=>{
            await MenuProductListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Our Menu'}/>
            <Menu/>
        </Layout>
    );
};

export default MenuPage;