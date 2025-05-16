import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import WishList from "../component/wish/WishList.jsx";
import DashboardSidebar from "../component/layout/DashboardSidebar.jsx";
import WishStore from "../store/WishStore.js";

const WishListPage = () => {
    const {WishListRequest} = WishStore()

    useEffect(() => {
        (async ()=>{
            await WishListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'WishList'}/>
            <DashboardSidebar>
                <WishList/>
            </DashboardSidebar>
        </Layout>
    );
};

export default WishListPage;