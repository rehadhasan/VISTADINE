import React, {useEffect, useState} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import DashboardSidebar from "../component/layout/DashboardSidebar.jsx";
import Profile from "../component/user/Profile.jsx";
import ProfileSkeleton from "../skeleton/user/ProfileSkeleton.jsx";
import UserStore from "../store/UserStore.js";

const ProfilePage = () => {
    const {ReadProfileRequest,ProfileDetails} = UserStore()
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
            await ReadProfileRequest()
        })()
    }, []);

    if(loading || ProfileDetails === {}){
        return (
            <Layout>
                <BannerSection title={'Profile'} />
                <DashboardSidebar>
                    <ProfileSkeleton/>
                </DashboardSidebar>
            </Layout>
        );
    }else{
        return (
            <Layout>
                <BannerSection title={'Profile'} />
                <DashboardSidebar>
                    <Profile/>
                </DashboardSidebar>
            </Layout>
        );
    }
};

export default ProfilePage;