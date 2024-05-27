import React from 'react'
import '../styles/Projects.css'
import { useNavigate } from 'react-router-dom';

export function ProjectItems({ image, name, link }) {
  const navigate = useNavigate()
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage"/>
      <h1> {name} </h1>
      {/* <a href={link}> go to code</a> */}
    </div>
  );
}
