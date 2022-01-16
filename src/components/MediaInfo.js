import React from 'react';
import "./MediaInfo.css"
import RoundButton from "./RoundButton";

function MediaInfo({img, title, description}) {
    return (
        <div className="MediaInfo">
            <img src={img} alt=""/>
            <h3>{title}</h3>

            <div className="MediaInfoDescription">
                <p>{description}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    );
}

export default MediaInfo;
