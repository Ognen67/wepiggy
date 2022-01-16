import React from 'react';
import "./StraightMarquee.css"

function StraightMarquee({title}) {
    return (
        <marquee style={{transform: "rotate(0deg)"}} width="100%" direction="left" height="100px" hspace="1000"
                 scrollamount="5">
            <span>{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
            <span >{title}</span>
        </marquee>
    );
}

export default StraightMarquee;
