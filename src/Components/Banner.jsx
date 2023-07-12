import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaLinkedin , FaReact} from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai'
import { SiVite, SiNodedotjs, SiMongodb , SiFirebase, SiNetlify} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import { BiLogoCss3, BiLogoJavascript, BiLogoBootstrap, BiLogoTailwindCss } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className='text-cyan-900 bg-pink-100 h-[500px] flex justify-center items-center font-serif'>
            <div className='w-1/2 p-10 space-y-4 '>
                <h3 className='text-5xl font-medium'>Hello I'm <span>Khadiza Samiha</span></h3>
                <h2 className='text-4xl font-bold'><span>I'm a </span>
                    <TypeAnimation className='text-purple-600'
                        sequence={['Developer', 2000,
                            'Programmer', 2000,
                        ]}
                        repeat={Infinity}
                    />
                </h2>
                <p className='text-md w-2/3 font-serif'>This is my official Portfolio Website to show all details and work of web development</p>
                <div className='flex text-lg space-x-3 ms-5 mt-10'>
                    <Link to=''><FaFacebook /></Link>
                    <Link to='https://github.com/KhadizaSamiha'><FaGithub /></Link>
                    <Link to='http://linkedin.com/in/khadiza-samiha-402b81262'><FaLinkedin /></Link>
                </div>

            </div>
            <div className='w-1/2'>
                <img data-aos='fade-up' className='ms-24 h-96 w-80 rounded-lg' src="https://i.ibb.co/59GxW2B/IMG-20230710-132721.png" alt="" />
                <Marquee>
                    <div className='flex text-3xl mt-3 space-x-3'>
                        <AiFillHtml5 />
                        <BiLogoCss3 />
                        <BiLogoBootstrap/>
                        <BiLogoTailwindCss/>
                        <BiLogoJavascript/>
                        <FaReact/>
                        <SiVite/>
                        <TbBrandNextjs/>
                        <SiNodedotjs/>
                        <SiMongodb/>
                        <SiFirebase/>
                        <SiNetlify/>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;