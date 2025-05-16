import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import AppFooter from "./AppFooter.jsx";

const Layout = (props) => {
    return (
        <>
            <AppNavbar/>
            {props.children}
            <AppFooter/>
        </>
    );
};

export default Layout;