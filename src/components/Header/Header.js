import React from 'react'
import {Link} from 'react-scroll'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
            <h1>Develop<span>er</span>
            </h1>
        </div>
        <div className="header__right">
            <Link to="about" 
            smooth={true} duration={500}>
            <h2>About</h2>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
            <h2>Skills</h2>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
            <h2>Projects</h2>
            </Link>
            <Link to="exp" smooth={true} duration={500}>
            <h2>Experience</h2>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
            <h2>Contact</h2>
            </Link>
            <h4 className="header__rightbutton">Joint with Me </h4>
        </div>
            
        </div>
    )
}

export default Header;