import React from 'react'
import "./ProjectContainer.css";
import { Element } from 'react-scroll';
import Project from '../Project/Project';
const ProjectContainer = () => {
const projects=[
    {
        img:"https://i.pinimg.com/originals/7f/b1/f1/7fb1f193435815a86c8484f82b9589e1.jpg",
        title:"Instagram",
        desc:"I Like Instagram",
        link:"www.google.com",
    },
    {
        img:"https://i.pinimg.com/originals/7f/b1/f1/7fb1f193435815a86c8484f82b9589e1.jpg",
        title:"LinkedIn",
        desc:"I Like LinkedIn",
        link:"www.google.com",
    },
    {
        img:"https://i.pinimg.com/originals/7f/b1/f1/7fb1f193435815a86c8484f82b9589e1.jpg",
        title:"Twitter",
        desc:"I Like Twitter",
        link:"www.google.com",
    },
    {
        img:"https://i.pinimg.com/originals/7f/b1/f1/7fb1f193435815a86c8484f82b9589e1.jpg",
        title:"FaceBook",
        desc:"I Like FaceBook",
        link:"www.google.com",
    },
    {
        img:"https://i.pinimg.com/originals/7f/b1/f1/7fb1f193435815a86c8484f82b9589e1.jpg",
        title:"Telegram",
        desc:"I Like Telegram",
        link:"www.google.com",
    },
    {
        img:"https://i.pinimg.com/originals/7f/b1/f1/7fb1f193435815a86c8484f82b9589e1.jpg",
        title:"Gitgub",
        desc:"I Like Gitgub",
        link:"www.google.com",
    },
];

    return (
        <Element className="projectcontainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects which I done for making lives of people easy.
            </p>
            <div className="projectcontainer__project">
            {
                projects.map((project,index)=>
                {
                    return(
                        <Project key={index} 
                        img={project.img} 
                        title={project.title} 
                        desc={project.desc} 
                        link={project.link} />
                    );
                })
            }
            </div>
        </Element>
    )
};

export default ProjectContainer
    