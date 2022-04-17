import React from 'react';

import Section1 from './Section1';
import Work from './Work';
import Process from './Process';
import Services from './Services';
import Testimonial from './Testimonial';
import Header from '../misc/Header';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Section1 />
            <section id='work' style={{ backgroundColor: "rgb(25, 207, 168)" }}>
                <Work />
            </section>
            <section id='process' style={{ backgroundColor: "#fff" }}>
                <Process />
            </section>
            <section id='services'>
                <Services />
            </section>
            <section id='testimonials' style={{ backgroundColor: "#fff" }}>
                <Testimonial />
            </section>
        </React.Fragment>
    )
}

export default Home;