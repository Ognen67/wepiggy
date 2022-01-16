import React from 'react';
import "./MainBanner.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import BigRoundButton from "./BigRoundButton";
import image from "../images/main-visual-nft.png"
import BigBlueButton from "./BigBlueButton";
import {FaDiscord, FaMedium, FaMediumM, FaTelegram, FaTwitter} from "react-icons/fa";

function MainBanner(props) {
    return (
        <div className="MainBanner">
            <div className="MainBannerLeft">
                <h1 className="Title">Unlock the financial value of your NFT</h1>
                <p>SODIUM is a non-custodial liquidity market protocol that enables user to effortlessly lend, borrow,
                    and earn interest with digital assets based on an automated asset valuation.</p>

                <div className="MainBannerButtons">
                    <BigRoundButton title="Launch App"/>
                    <a href="#Blocks"><BigBlueButton title="Explore"/></a>
                </div>
                <div className="MediaIcons">
                    <div className="MediaIcon">
                        <FaMediumM size={20}/>
                    </div>
                    <div className="MediaIcon">
                        <FaDiscord size={20}/>
                    </div>
                    <div className="MediaIcon">
                        <FaTwitter size={20}/>
                    </div>
                    <div className="MediaIcon">
                        <FaTelegram size={20}/>
                    </div>
                </div>

            </div>
            {/*<div className="MainBannerRight">*/}
            <img className="NftImage" src={image} alt="Main Visual"/>
            {/*</div>*/}
        </div>
    );
}

export default MainBanner;
