import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsContext } from '../../App';

const Details = () => {
    const {id}=useParams();
    const [projects]=useContext(DetailsContext)
    console.log(projects)
    const project=projects.find((project)=>project.id==id);
    return (
        <div className="bg-zinc-50">
           <h1 className="text-4xl ml-2 text-center py-2">{project?.name}</h1>
           <div className="text-1xl p-2 ml-2 text-left">
           <h1>{project?.details_describe}</h1>
           <h1>{project?.details_describe1}</h1>
           <h1>{project?.details_describe2}</h1>
           <h1>{project?.details_describe3}</h1>
           <h1>{project?.details_describe4}</h1>
           </div>
           <div className="grid m-2 p-2 grid-cols-1 lg:grid-cols-3 gap-4">
                <img src={project?.image1} alt="" />
                <img src={project?.image2} alt="" />
                <img src={project?.image3} alt="" />
                <img src={project?.image4} alt="" />
                <img src={project?.image5} alt="" />
                <img src={project?.image6} alt="" />
                <img src={project?.image7} alt="" />
           </div>
           <div className="flex justify-center gap-1 mb-2">
            <a className="bg-pink-500 p-2 rounded text-white" href={project?.live} alt=''>Live Site</a>
            <a className="bg-pink-500 p-2 rounded text-white" href={project?.client} alt=''>Client Site</a>
            <a className="bg-pink-500 p-2 rounded text-white" href={project?.server} alt=''>Server Site</a>
            </div>
        </div> 
    );
};

export default Details;