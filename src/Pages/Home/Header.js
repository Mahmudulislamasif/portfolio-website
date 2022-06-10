import React from 'react';
import image from '../../Image/Profile.png'
const Header = () => {
    return (
        <div class="hero min-h-screen bg-purple-700 text-left  text-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="avatar">
            <div class="rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2">
            <img src={image} class="rounded-lg shadow-2xl bg-slate-500" alt='' />
            </div>
          </div>
         
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