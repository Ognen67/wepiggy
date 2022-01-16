import React from 'react';
import "./Header.css"
import {NavLink} from "react-router-dom";
import RoundButton from "./RoundButton";

const Navbar = () => {
    return (
        <div className="Header">
            <img className="Logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
                 alt=""/>

            <div className="Links">
                <NavLink className="link" to="home">Home</NavLink>
                <NavLink className="link" to="#">Product</NavLink>
                <NavLink className="link" to="#">DAO</NavLink>
                <NavLink className="link" to="#">Docs</NavLink>
                <NavLink className="link" to="#">About Us</NavLink>
            </div>
            <div className="AppButton">
                <RoundButton title="APP"/>
            </div>
        </div>
    );
};

export default Navbar;
