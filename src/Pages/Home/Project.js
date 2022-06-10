import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {id,name,image,live,client,server,describe,technology}=project
    const navigate=useNavigate()
    return (
        <div className="card bg-slate-200 shadow-xl">
        <figure>
            <img className="p-2 rounded-xl" src={image} alt="" />
        </figure>
        <div className="card-body bg-slate-600 text-white">
            <h2 className="card-title">{name}</h2>
            <p className="text-left">{describe}</p>
            <p className="text-left">Technology:{technology}</p>
            <div className="flex gap-1">
            <a className="bg-pink-500 w-1/2 mx-auto rounded text-white" href={live} alt=''>Live Site</a>
            <a className="bg-pink-500 w-1/2 mx-auto rounded text-white" href={client} alt=''>Client Site</a>
            {
              server && <a className="bg-pink-500 w-1/2 mx-auto rounded text-white" href={server} alt=''>Server Site</a>
            }
            </div>

            <button onClick={()=>navigate(`/details/${id}`)} className="bg-white w-full mx-auto rounded text-black" to=''>Details</button>
        </div>
        </div>
    );
};

export default Project;