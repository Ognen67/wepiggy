import React, {useEffect} from 'react';
import "./BlockComponent.css"
import TextBlockComponent from "./TextBlockComponent";
import Fade from 'react-reveal/Fade';

function BlockComponent({image, title, text, buttonText, buttonLink}) {
    return (
        <div className="BlockComponent">
            <Fade bottom><img className="BlockImage" src={image} alt=""/></Fade>
            <div className="BlockComponentText">
                <Fade bottom><TextBlockComponent title={title} text={text} buttonText={buttonText}
                                                buttonLink="https://docs.sodium.fi/ "/></Fade>
            </div>
        </div>
    );
}

export default BlockComponent;
