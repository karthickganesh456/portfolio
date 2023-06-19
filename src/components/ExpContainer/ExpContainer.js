import React from 'react'
import { Element } from 'react-scroll';
import Exp from './Exp/Exp';
import "./ExpContainer.css"

const ExpContainer = () => {
    return (
        <Element className="expcontainer" id="exp">
            <h1>Experience</h1>
            <div className="expcontainer__info">
            <Exp number="+10" title="Clients"/>
            <Exp number="2+" title="Projects" style={{backgroundColor:"#06CE06"}}/>
            <Exp number="1+" title="Year"/>
            <Exp number="111+" title="Workers"/>
            </div>
        </Element>
    );
};

export default ExpContainer
