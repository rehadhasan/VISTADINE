import React, {useEffect} from 'react';
import Layout from "../component/layout/Layout.jsx";
import BannerSection from "../component/layout/BannerSection.jsx";
import Cart from "../component/cart/Cart.jsx";
import CartStore from "../store/CartStore.js";

const CartPage = () => {
    const {CartListRequest} = CartStore()

    useEffect(() => {
        (async ()=>{
            await CartListRequest()
        })()
    }, []);
    return (
        <Layout>
            <BannerSection title={'Cart'}/>
            <Cart/>
        </Layout>
    );
};

export default CartPage;