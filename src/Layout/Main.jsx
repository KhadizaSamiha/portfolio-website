import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import About from '../Components/About';




const Main = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div className='text-white'>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Main;