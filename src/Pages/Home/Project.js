import React from 'react';

const Project = ({project}) => {
    const {name,image,live,client,server,describe}=project
    return (
        <div className="card bg-slate-200 shadow-xl">
        <figure>
            <img className="p-2 rounded-xl" src={image} alt="" />
        </figure>
        <div className="card-body bg-slate-600 text-white">
            <h2 className="card-title">{name}</h2>
            <p className="text-left">{describe}</p>
            <a className="bg-pink-500 w-1/2 mx-auto rounded text-white" href={live} alt=''>Live Site</a>
            <a className="bg-pink-500 w-1/2 mx-auto rounded text-white" href={client} alt=''>Client Site</a>
            {
              server && <a className="bg-pink-500 w-1/2 mx-auto rounded text-white" href={server} alt=''>Server Site</a>
            }
            
        
        </div>
        </div>
    );
};

export default Project;