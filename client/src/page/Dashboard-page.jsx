import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import DashboardSidebar from "../component/layout/DashboardSidebar.jsx";
import Dashboard from "../component/user/Dashboard.jsx";
import UserStore from "../store/UserStore.js";
import InvoiceStore from "../store/InvoiceStore.js";

const DashboardPage = () => {
    const {ReadProfileRequest, UserDetailsRequest} = UserStore()
    const {InvoiceListRequest} = InvoiceStore()

    useEffect(() => {
        (async ()=>{
            await UserDetailsRequest()
            await ReadProfileRequest()
            await InvoiceListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Dashboard'}/>
            <DashboardSidebar>
                <Dashboard/>
            </DashboardSidebar>
        </Layout>
    );
};

export default DashboardPage;