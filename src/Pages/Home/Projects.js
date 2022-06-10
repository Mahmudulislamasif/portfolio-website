import React, { useContext, useEffect, useState } from 'react';
import Project from './Project';
import { DetailsContext } from '../../App';
const Projects = () => {
    const [projects,setProjects]=useContext(DetailsContext)
    useEffect(()=>{
     fetch('info.json')
     .then(res=>res.json())
     .then(data=>setProjects(data))
    },[])
    return (
        <div className="bg-[#F9F6F0]">
        <h1 className="text-5xl p-3 text-purple-700 tex-bold" id='projects'>Projects</h1>
        <div className="grid mx-2 pb-2 grid-cols-1 lg:grid-cols-3 gap-4">
        {
          projects.slice(0,6).map(project=><Project key={project.id} project={project}></Project>)
        }
        </div>
    </div>
    );
};

export default Projects;