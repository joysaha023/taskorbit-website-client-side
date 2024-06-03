import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Works from './Works/Works';
import Earners from './Earners/Earners';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Works></Works>
            <Earners></Earners>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;