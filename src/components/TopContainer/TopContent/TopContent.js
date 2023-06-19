import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"
const TopContent = () => {
    return (
        <div className="topcontent">
        <div className="topcontent__container">
            <h1>Mr.Karthick G </h1>
            <p>Iam Software Developer </p>
            <a href="www.google.com">
                <button className="topcontent__downloadbutton">Download CV</button>
            </a>
            <Link to="projects"smooth={true} duration={500}>
                <button className="topcontent__workbutton">My Work</button>
            </Link>
        </div>
            
        </div>
    )
}

export default TopContent
