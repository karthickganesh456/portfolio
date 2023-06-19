import React from 'react'
import "./Exp.css";
const Exp = ({number,title,style}) => {
    return (
        <div className="exp" 
        style={{...style}}>
            <h1>{number}</h1>
            <p>{title}</p>
        </div>
    )
}

export default Exp
