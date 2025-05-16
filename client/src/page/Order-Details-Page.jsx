import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import DashboardSidebar from "../component/layout/DashboardSidebar.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import OrderDetails from "../component/user/Order-Details.jsx";
import InvoiceStore from "../store/InvoiceStore.js";
import {useParams} from "react-router-dom";

const OrderDetailsPage = () => {
    const {invoiceID} = useParams()
    const {InvoiceDetailsRequest} = InvoiceStore()

    useEffect(() => {
        (async ()=>{
            await InvoiceDetailsRequest(invoiceID)
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Order Details'}/>
            <DashboardSidebar>
                <OrderDetails/>
            </DashboardSidebar>
        </Layout>
    );
};

export default OrderDetailsPage;