import React from 'react'
import { Element } from 'react-scroll';
import "./SkillContainer.css";
import skilling from "../../image/Skill.jpg";
import  LinearProgress  from '@material-ui/core/LinearProgress';

const SkillContainer = () => {
    return (

    <Element className="skillcontainer" id="skills">
    <div className="skillcontainer__image">
    <img src={skilling} alt=""/>
    </div>
    <div className="skillcontainer__text">
    <h1>Skills Set</h1>
    <div className="skillcontainer__skillset">
    <h3>React</h3>
    <div className="skillcontainer__slider skillcontainer__slider1">
    <LinearProgress variant="determinate" value={90}/>
    </div>
    </div>
    <div className="skillcontainer__skillset">
    <h3>Python</h3>
    <div className="skillcontainer__slider skillcontainer__slider2">
    <LinearProgress variant="determinate" value={80}/>
    </div>
    </div>
    <div className="skillcontainer__skillset">
    <h3>Java</h3>
    <div className="skillcontainer__slider skillcontainer__slider3">
    <LinearProgress variant="determinate" value={70}/>
    </div>
    </div>
    <div className="skillcontainer__skillset">
    <h3>HTML</h3>
    <div className="skillcontainer__slider skillcontainer__slider4">
    <LinearProgress variant="determinate" value={85}/>
    </div>
    </div>
    <div className="skillcontainer__skillset">
    <h3>Mysql</h3>
    <div className="skillcontainer__slider skillcontainer__slider5">
    <LinearProgress variant="determinate" value={75}/>
    </div>
    </div>
    <div className="skillcontainer__skillset">
    <h3>Bootstrap</h3>
    <div className="skillcontainer__slider skillcontainer__slider6">
    <LinearProgress variant="determinate" value={95}/>
    </div>
    </div>
    </div>
    </Element>
    )
}

export default SkillContainer
