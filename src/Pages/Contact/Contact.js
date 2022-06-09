import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mi2alox', 'template_e7s4z2r', e.target, 'OKXeEeNGutiOxdfGY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
       <div className="bg-slate-500 min-h-screen">
        <form ref={form} onSubmit={sendEmail}  className="grid grid-cols-1 gap-3 justify-items-center p-5">  
           <input type="text" name="name"  placeholder="Name" className="input input-bordered w-1/2" required/>
           <input type="email" name="email"  placeholder="Email" className="input input-bordered w-1/2" required />
           <textarea type="text" name="comment"  placeholder="Write Your Comment Here" className="input input-bordered w-1/2" required />
           <input type="submit" value="Submit" className="btn btn-accent text-white w-1/2 mb-4" required/>
        </form>
       </div>

    );
};

export default Contact;