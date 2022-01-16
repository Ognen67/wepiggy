import React from 'react';
import "./Investor.css"

function Investor({image}) {
    return (
        <div className="Investor">
            <img src={image} alt=""/>
        </div>
    );
}

export default Investor;
