import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';
import Faq from '../../Components/Faq/Faq';
import OurTeachers from '../../Components/OurTeachers/OurTeachers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurTeachers></OurTeachers>
            <Gallery></Gallery>
            <Faq></Faq>
        </div>
    );
};

export default Home;