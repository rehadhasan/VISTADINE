import React, {useEffect, useState} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import DashboardSidebar from "../component/layout/DashboardSidebar.jsx";
import Settings from "../component/user/Settings.jsx";
import UserStore from "../store/UserStore.js";
import SettingsSkeleton from "../skeleton/user/SettingsSkeleton.jsx";

const SettingPage = () => {
    const {UserDetailsRequest,UserDetails} = UserStore()
    const [loading, setLoading] = useState(true);  // Loading state for skeleton

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);

    useEffect(() => {
        (async ()=>{
            await UserDetailsRequest()
        })()
    }, []);

    if(loading || UserDetails === null){
        return (
            <Layout>
                <BannerSection title="Setting" />
                <DashboardSidebar>
                    <SettingsSkeleton/>
                </DashboardSidebar>
            </Layout>
        );
    }else{
        return (
            <Layout>
                <BannerSection title="Setting" />
                <DashboardSidebar>
                    <Settings/>
                </DashboardSidebar>
            </Layout>
        );
    }
};

export default SettingPage;