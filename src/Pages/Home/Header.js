import React from 'react';
import image from '../../Image/Profile.png'
const Header = () => {
    return (
        <div class="hero min-h-screen bg-purple-700 text-left  text-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={image} class="rounded-lg shadow-2xl bg-slate-200" alt='' />
          <div>
            <h1 class="text-5xl font-bold">Portfolio</h1>
            <p class="py-6 text-3xl">HI, I am Mohammad Mahmudul Islam<span className="block">MERN Stack devlper</span></p>
            <button class="btn btn-secondary font-bold">Hire Me</button>
          </div>
        </div>
      </div>
    );
};

export default Header;