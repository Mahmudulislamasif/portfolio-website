import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuBar=<> 
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/contact'>Contact Me</Link></li>
    <li><Link to="My Resume.pdf" target="_blank" className="border-2" download>Download Resume</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><a href='#projects'>Projects</a></li>
    </>
    return (
        <div className="navbar bg-purple-700 text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
               {menuBar}
            </ul>
            </div>
            <Link to='/home' className="btn btn-ghost normal-case text-xl">Mahmudul Islam</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuBar}
            </ul>
        </div>
            
        </div>
    );
};

export default Navbar;