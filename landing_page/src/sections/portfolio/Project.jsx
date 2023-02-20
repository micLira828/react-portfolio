import React from 'react';
import Card from '../../components/Card';

const Project = ({project}) => {
  return (
    <Card className = "portfolio__project">
      <div className="portfolio__project-image">
        <img src = {project.image}></img>
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <a href={project.demo} target = "_blank" rel = "noopener noreferrer" className = "btn sm">
      Demo</a> 
    </Card>
  )
}

export default Project
