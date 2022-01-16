import React from "react";
import "./Footer.css"
import {Twitter} from "@mui/icons-material";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterTitle">
                <h2>Copyright 2022 SODIUM <span style={{color: "#4C20CA"}}>|</span> Unlock your asset values</h2>
            </div>
            <div className="FooterContent">
                <div className="FooterLinks">
                    <div className="FooterLink"><h3>About Us</h3></div>
                    <div className="FooterLink"><h3>Services</h3></div>
                    <div className="FooterLink"><h3>Contact Us</h3></div>
                </div>
                <div className="FooterMediaLinks">
                    <div className="MediaLink"><Twitter/></div>
                    <div className="MediaLink"><Twitter/></div>
                    <div className="MediaLink"><Twitter/></div>
                    <div className="MediaLink"><Twitter/></div>
                </div>
            </div>

        </div>
    );
};
export default Footer;
