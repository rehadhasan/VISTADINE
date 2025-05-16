import React, {useEffect, useState} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Checkout from "../component/checkout/Checkout.jsx";
import CartStore from "../store/CartStore.js";
import UserStore from "../store/UserStore.js";
import CheckoutSkeleton from "../skeleton/items/CheckoutSkeleton.jsx";

const CheckoutPage = () => {
    const {CartListRequest,CartList} = CartStore()
    const {ReadProfileRequest,ProfileDetails} = UserStore()

    const [isLoading, setIsLoading] = useState(true); // New state for loading

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);

    useEffect(() => {
        (async ()=>{
            await ReadProfileRequest()
            await CartListRequest()
        })()
    }, []);

    if (isLoading || CartList === null && ProfileDetails === null) {
        return (
            <Layout>
                <BannerSection title={'Checkout'}/>
                <CheckoutSkeleton />
            </Layout>
        )
    }else{
        return (
            <Layout>
                <BannerSection title={'Checkout'}/>
                <Checkout/>
            </Layout>
        );
    }
};

export default CheckoutPage;