import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
     fetch('info.json')
     .then(res=>res.json())
     .then(data=>setProjects(data))
    },[])
    return (
        <div>
        <h1 className="text-5xl mt-2 text-purple-700 tex-bold">Projects</h1>
        <div className="grid m-4 grid-cols-1 lg:grid-cols-3 gap-4">
        {
          projects.slice(0,6).map(project=><Project key={project.id} project={project}></Project>)
        }
        </div>
    </div>
    );
};

export default Projects;