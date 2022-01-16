import React from 'react';
import {Button} from "@mui/material";
import "./TextBlockComponent.css"
import RoundButton from "./RoundButton";

function TextBlockComponent({title, text, buttonText, buttonLink}) {
    return (
        <div className="TextBlockComponent">
            <h1>{title}</h1>
            <p>{text}</p>
            {buttonText && <a href={buttonLink}><RoundButton title={buttonText}/></a>}
        </div>
    );
}

export default TextBlockComponent;
