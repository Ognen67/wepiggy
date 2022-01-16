import React from 'react';
import "./AboutPage.css"

function AboutPage(props) {
    return (
        <div className="AboutPage">
            <div className="AboutPageBanner">
                <img style={{margin: 0}} src="https://wepiggy.static.fortop.site/static/banner.39d64a47.png" alt=""/>
                <img className="PiggyImage" src="https://wepiggy.static.fortop.site/static/icon.ed9ba935.png" alt=""/>
            </div>
            <div className="AboutPageAssets">
                <div className="AboutPageAssetsAsset">
                    <h1>9+</h1>
                    <p>Chains Supported</p>
                </div>
                <div className="AboutPageAssetsAsset">
                    <h1>93+</h1>
                    <p>Assets Listed
                    </p>
                </div>
                <div className="AboutPageAssetsAsset">
                    <h1>$ 84M+</h1>
                    <p>Total Deposit Market Size
                    </p>
                </div>
                <div className="AboutPageAssetsAsset">
                    <h1>$ 27M+</h1>
                    <p>Total Borrow Market Size</p>
                </div>
            </div>
            <div className="AboutPageInfo">
                <h1> What is WePiggy? </h1>
                <p>WePiggy is an open source, non-custodial crypto asset lending market protocol. In WePiggy's market,
                    users can deposit their crypto assets to earn interest, or borrow others by paying interests.</p>
            </div>

            <div className="AboutPageInfo">
                <h1>About WePiggy DAO</h1>
                <p>WePiggy DAO is a decentralized autonomous organization(DAO) composed of all WPC holders.

                    WePiggy DAO aims to realize the decentralization and widespread use of the WePiggy protocol, making WePiggy a crypto bank used, shared and co-governed by users worldwide.</p>
            </div>
        </div>
    );
}

export default AboutPage;
