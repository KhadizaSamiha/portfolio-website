import React from 'react';
import { Link } from 'react-router-dom';
import {FaArrowDown } from 'react-icons/fa';

const Navbar = () => {
    const navOptions = <>
        <li className='font-medium text-lg'><Link to='/'>Home</Link></li>
        <li className='font-medium text-lg'><Link to='/skills'>Skills</Link></li>
        <li className='font-medium text-lg'><Link to='/introduction'>Introduction</Link></li>
        <li className='font-medium text-lg'><Link to='/projects'>Projects</Link></li>
        <li className='font-medium text-lg'><Link to='/contacts'>Contacts</Link></li>
    </>
    return (
        <div>
            <div className="navbar text-white bg-cyan-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                        </ul>
                    </div>
                    <span class=" ms-10 text-2xl font-bold bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 text-transparent bg-clip-text animate-gradient">Khadiza Samiha</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='KhadizaSamihaResume.doc.pdf' download='KhadizaSamihaResume.doc.pdf'  className="btn  bg-cyan-100 opacity-80 w-2/3 lg:w-1/2"><FaArrowDown/>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;