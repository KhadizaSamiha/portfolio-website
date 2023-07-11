import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';

const Main = () => {
    return (
        <div className='text-white'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Contact></Contact>
        </div>
    );
};

export default Main;