import React from 'react';
import Footer from '../Share/Footer/Footer';
import TopMenu from '../Share/TopMenu/TopMenu';
import AboutUs from './AboutUs/AboutUs';
import BrandList from './BrandList/BrandList';
import ContactUs from './ContactUs/ContactUs';

import Header from './Header/Header';
import PortfolioGallery from './PortfolioGallery/PortfolioGallery';


import ReviewSection from './ReviewSection/ReviewSection';
import Services from './Services/Services';
import SkilledTeam from './SkilledTeam/SkilledTeam';

const Home = () => {
    return (
<div id="home">
    <TopMenu></TopMenu>
    <Header></Header>
    <AboutUs></AboutUs>
    <Services></Services>
    <PortfolioGallery></PortfolioGallery>
    <SkilledTeam></SkilledTeam>
    <ReviewSection></ReviewSection>
    <ContactUs></ContactUs>
    <BrandList></BrandList>
    <Footer></Footer>
</div>
    );
};

export default Home;