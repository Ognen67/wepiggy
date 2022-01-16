import React from 'react';
import {Button} from "@mui/material";
import "./NftImage.css"
import RoundButton from "./RoundButton";

function NftImage({image}) {
    return (
        <div className="NftPic">
            <img className="NftImagePic" src={image} alt=""/>
            <div className="NftImageInfo">
                <h3 style={{color: "#FF4C94"}}>Borrowing limit 14.92 ETH</h3>
                <div className="NftImageInfoInner">
                    <h3>Borrow APR</h3>
                    <h3>19.79%</h3>
                </div>
                <RoundButton title="SOD 23.81% APR"/>
            </div>
        </div>
    );
}

export default NftImage;
