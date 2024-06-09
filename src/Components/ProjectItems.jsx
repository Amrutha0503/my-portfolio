import React from 'react'
import '../styles/Projects.css'

export function ProjectItems({ image, name, link }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgimage"/>
      <h1> {name} </h1>
      <a href={link}> go to code</a>
    </div>
  );
}
