import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./page/Home-Page.jsx";
import MenuPage from "./page/Menu-page.jsx";
import ItemsFoodsPage from "./page/Items-Foods-page.jsx";
import CartPage from "./page/Cart-page.jsx";
import CheckoutPage from "./page/Checkout-page.jsx";
import ProductDetailsPage from "./page/Product-Details-Page.jsx";
import GalleryPage from "./page/Gallery-page.jsx";
import FaqPage from "./page/Faq-page.jsx";
import CareerPage from "./page/Career-page.jsx";
import CareerDetailsPage from "./page/Career-Details-page.jsx";
import TeamPage from "./page/Team-page.jsx";
import ReservationPage from "./page/Reservation-page.jsx";
import AboutPage from "./page/About-page.jsx";
import BlogPage from "./page/Blog-page.jsx";
import BlogDetailsPage from "./page/Blog-Details-page.jsx";
import ContactPage from "./page/Contact-page.jsx";
import DashboardPage from "./page/Dashboard-page.jsx";
import OrderPage from "./page/Order-page.jsx";
import OrderDetailsPage from "./page/Order-Details-Page.jsx";
import SettingPage from "./page/Setting-page.jsx";
import ProfilePage from "./page/Profile-page.jsx";
import WishListPage from "./page/WishList-page.jsx";
import LoginPage from "./page/Login-page.jsx";
import SignupPage from "./page/Signup-page.jsx";
import ForgotPasswordPage from "./page/ForgotPassword-page.jsx";
import OTPVerificationPage from "./page/OTPVerification-page.jsx";
import ResetPasswordPage from "./page/ResetPassword-page.jsx";
import TermsAndConditionsPage from "./page/TermsAndConditions-page.jsx";
import PrivacyPolicyPage from "./page/PrivacyPolicy-page.jsx";
import NotFound from "./component/layout/NotFound.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/menu' element={<MenuPage/>}/>
                <Route path='/items/foods' element={<ItemsFoodsPage/>}/>
                <Route path='/item/details/:productID' element={<ProductDetailsPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/checkout' element={<CheckoutPage/>}/>
                <Route path='/gallery' element={<GalleryPage/>}/>
                <Route path='/faq' element={<FaqPage/>}/>
                <Route path='/career' element={<CareerPage/>}/>
                <Route path='/career/details/:jobID' element={<CareerDetailsPage/>}/>
                <Route path='/team' element={<TeamPage/>}/>
                <Route path='/reservation' element={<ReservationPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/blog/details/:blogID' element={<BlogDetailsPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/terms-and-conditions' element={<TermsAndConditionsPage/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}/>
                <Route path='/orders' element={<OrderPage/>}/>
                <Route path='/orders/details/:invoiceID' element={<OrderDetailsPage/>}/>
                <Route path='/wish' element={<WishListPage/>}/>
                <Route path='/setting' element={<SettingPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/forgot' element={<ForgotPasswordPage/>}/>
                <Route path='/otp-verification' element={<OTPVerificationPage/>}/>
                <Route path='/reset-password' element={<ResetPasswordPage/>}/>
                <Route path={'*'} element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;