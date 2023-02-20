import './portfolio.css';
import data from './data';
import { useState } from 'react';
import Projects from './Projects';
import ProjectCategories from './ProjectCategories';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectHandler = (category)=> {
   
    if(category === "all"){
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  return (
    <section id = "portfolio">
    <h2>Portfolio</h2>
    <p> Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.</p>
    <div className="container portfolio__container">
        <ProjectCategories categories={uniqueCategories } onFilterProjects={filterProjectHandler}/>

        <Projects projects = {projects}/>
    
    </div>
    </section>
  
  )
}

export default Portfolio