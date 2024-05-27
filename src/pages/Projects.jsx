import React from 'react'
import { ProjectItems } from '../Components/ProjectItems'
import {ProjectList} from '../assets/ProjectList'
import '../styles/Projects.css'


export function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return (
            <ProjectItems name={project.name} image={project.image} link={project.link}/>
          );
        })}
      </div>
    </div>
  );
}
