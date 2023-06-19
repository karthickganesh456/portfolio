import React from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react';
import "./Project.css"
const Project = ({img,title,desc,link}) => {
    const [show, setshow] = useState(false);

    return (
        <a href={link}>
            <div className="project" 
            onMouseEnter={()=>setshow(true)} 
            onMouseLeave={()=>setshow (false)} >
            {
                show ? (
                    <div>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    ) : (
                        <img src={img} alt=""></img>
                    )
            }
            </div>
        </a>
    )
}

export default Project
