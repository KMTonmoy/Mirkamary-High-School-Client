import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Subnav from '../Components/SubNavbar/Subnav';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Subnav></Subnav>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;