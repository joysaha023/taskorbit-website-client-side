import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Works from './Works/Works';
import Earners from './Earners/Earners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Works></Works>
            <Earners></Earners>
        </div>
    );
};

export default Home;