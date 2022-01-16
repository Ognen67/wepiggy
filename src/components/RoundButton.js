import React from 'react';
import "./RoundButton.css"


function RoundButton({title}) {
    return (
        <div>
            <div className="RoundButton">
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default RoundButton;
