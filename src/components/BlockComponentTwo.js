import React from 'react';
import "./BlockComponentTwo.css"
import TextBlockComponent from "./TextBlockComponent";
import Fade from 'react-reveal/Fade';
function BlockComponentTwo({image, title, text, buttonText, buttonLink}) {
    return (
        <div className="BlockComponentTwo">
            <div className="BlockComponentText">
                <Fade bottom><TextBlockComponent title={title} text={text} buttonText={buttonText}/></Fade>
            </div>
            <div className="BlockComponentImage">
                <Fade bottom><img className="BlockImage" style={{width: 550}} src={image} alt=""/></Fade>
            </div>
        </div>
    );
}

export default BlockComponentTwo;
