import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Team from "../component/about/Team.jsx";
import TeamStore from "../store/TeamStore.js";

const TeamPage = () => {
    const{TeamListRequest} = TeamStore()

    useEffect(() => {
        (async ()=>{
            await TeamListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Team'}/>
            <Team/>
        </Layout>
    );
};

export default TeamPage;