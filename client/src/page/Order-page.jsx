import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import DashboardSidebar from "../component/layout/DashboardSidebar.jsx";
import Order from "../component/user/Order.jsx";
import InvoiceStore from "../store/InvoiceStore.js";

const OrderPage = () => {
    const {InvoiceListRequest} = InvoiceStore()

    useEffect(() => {
        (async ()=>{
            await InvoiceListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Orders'}/>
            <DashboardSidebar>
                <Order/>
            </DashboardSidebar>
        </Layout>
    );
};

export default OrderPage;