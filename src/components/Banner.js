import React from 'react';
import "./Banner.css"
import RoundButton from "./RoundButton";

function Banner({img, text}) {
    return (
        <div className="Banner">
            <img src={img} alt={text} />
            <div className="BannerContent">
                <h1>SODIUM BETA PROGRAM</h1>
                <h3>Participate in the SODIUM
                    beta program testing.
                </h3>

                <div style={{marginTop: 40}}>
                    <RoundButton title="Apply Now"/>
                </div>
            </div>
        </div>
    );
}

export default Banner;
