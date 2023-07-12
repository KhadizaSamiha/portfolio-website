import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowDown } from 'react-icons/fa'
import { Bounce, Fade, Slide } from "react-awesome-reveal";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section className='p-5' ref={ref}>
            <div className="container mx-auto rounded-lg p-10 bg-gray-600" >
                <div className='flex'>
                    <div className='w-1/2 bg-about bg-contain bg-no-repeat mix-blend-overlay relative'>
                        <img className='h-72 w-56 rounded-3xl border-e-8 border border-cyan-300' src="https://i.ibb.co/59GxW2B/IMG-20230710-132721.png" alt="" />
                        <div className='bg-gray-50 w-1/4 rounded-xl px-4 absolute bottom-0 ms-24 mt-10'>
                            <div className='text-[-40px] flex text-cyan-500 font-medium text-2xl'>
                                <p>+</p>
                                {inView ? <CountUp start={0} end={20} duration={3}></CountUp> : null}
                                <FaHeart className='text-pink-600 font-xl mt-2 ms-2'></FaHeart>
                            </div>
                            <div>
                                <h3 className='text-teal-600'>Proejcts</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 space-y-8'>
                        <h2 className='text-5xl font-medium font-serif text-cyan-400'>About Me</h2>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <h3 className='text-gray-300 font-medium'>I'm a full-stack frontend developer with over 6 month of experience.</h3>
                        </Fade>
                        <p className='text-gray-300'>I develop elegant and functional web experiences through design and coding.
                            My passion for what I do drives me to create beautifully simple solutions.</p>
                        <a href='KhadizaSamihaResume.doc.pdf' download='KhadizaSamihaResume.doc.pdf' className="btn  bg-cyan-100 opacity-80 w-2/3 lg:w-1/3 text-teal-400"><FaArrowDown />Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;