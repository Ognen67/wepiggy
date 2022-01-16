import React from 'react';
import "./InvestorsComponent.css"
import Investor from "./Investor";

function InvestorsComponent(props) {
    return (
        <div className="InvestorsComponent">
            <h1>Investors & Partners</h1>
            <div className="InvestorsComponentContent">
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
                <Investor image="https://cryptologos.cc/logos/polygon-matic-logo.png" />
            </div>
        </div>
    );
}

export default InvestorsComponent;
