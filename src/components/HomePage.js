import React from 'react';
import BasicTabs from "./BasicTabs";
import MediaInfo from "./MediaInfo";
import "./HomePage.css"
import Banner from "./Banner";
import MainBanner from "./MainBanner";
import BlockComponent from "./BlockComponent";
import BlockComponentTwo from "./BlockComponentTwo";
import RoundButton from "./RoundButton";
import InvestorsComponent from "./InvestorsComponent";
import Marquee from "./Marquee";
import StraightMarquee from "./StraightMarquee";

function HomePage(props) {
    return (
        <div className="HomePage">
            {/*<BasicTabs/>*/}
            <MainBanner/>
            <Marquee title="UNLOCK YOUR LIQUIDITY"/>
            <div id="Blocks">

            </div>
            <div className="Blocks">
                <BlockComponent image="https://prod.wepiggy.fortop.site/2021-12-06-cWR3Y2tEO2qSpoC7wNuByLrG3.png"
                                title="What is SODIUM?"
                                text="Sodium is a non-custodial liquidity market protocol. The protocol enables users to effortlessly lend, borrow, and earn interest with their digital assets. Depositors providing liquidity to the protocol may earn passive income, while borrowers are able to borrow in an NFT-over-collateralized manner"
                                buttonText="Docs"
                                buttonLink="https://docs.sodium.fi/ "/>
                <BlockComponentTwo image="https://wepiggy.static.fortop.site/static/info-0.5d7ce0cf.png"
                                   title="Fair Price Engine™"
                                   text="The FPE™ is an automatic NFT asset pricing system. The engine ensures that the platform's LTV ratio (in SODIUM terms, Health) is always up to date. Utilizing machine learning, our algorithm evaluates a number of unique data points in order to accurately calculate a final estimate."
                                   buttonText={false}
                                   buttonLink="#"
                />
                <BlockComponent image="https://prod.wepiggy.fortop.site/2021-12-06-cWR3Y2tEO2qSpoC7wNuByLrG3.png"
                                title="Liquidation Lottery"
                                text="Liquidation occurs if a borrower’s health falls to critical levels. The SODIUM protocol executes liquidation using a process called the Liquidation Lottery. To participate in the Lottery, you will have to stake $SOD, which will also allow you to earn staking bonuses and a portion of platform fees."
                                buttonText={false}
                                buttonLink="#"/>
                <BlockComponentTwo image="https://wepiggy.static.fortop.site/static/info-0.5d7ce0cf.png"
                                   title="Liquidation Mining"
                                   text="The majority of tokens will be distributed through the Liquidity Mining program.​ Borrowers, lenders and LP Stakers all automatically become a part of the Liquidity Mining program. The goal of the Liquidity Mining program is to incentivize Total Value Locked (TVL) growth, and increase the platform's utilization rate. This will be achieved by rewarding both the borrowing pool and the lending pool, respectively."
                                   buttonText="Details"
                                   buttonLink="https://docs.sodium.fi/"
                />

            </div>
            <Banner img="https://wepiggy.static.fortop.site/static/photo.1d5bb9e2.png" text="asd"/>
            <div className="ExploreSodium">
                <h1>Explore SODIUM</h1>
                <div className="MediaTabs">
                    <MediaInfo img="https://prod.wepiggy.fortop.site/2021-12-21-cdk08SiM2xpJXSqeIjfYKvsjT.png"
                               title="Piggy's Great Navigation AMA" description="2021/12/21"/>
                    <MediaInfo img="https://prod.wepiggy.fortop.site/2021-12-21-BYHabWIJfZRNONBVBjzC6nUCB.png"
                               title="Piggy's Great Navigation AMA" description="2021/12/21"/>
                    <MediaInfo img="https://prod.wepiggy.fortop.site/2021-12-21-qaDFnysahHA9ZAHoKZ2wSIakN.png"
                               title="Piggy's Great Navigation AMA" description="2021/12/21"/>
                </div>
                <div>
                    <a href="https://sodiumofficial.medium.com/" target="_blank"><RoundButton title="View More"/></a>
                </div>
            </div>
                <StraightMarquee title="UNLOCK YOUR LIQUIDITY"/>
            <InvestorsComponent/>
        </div>
    );
}

export default HomePage;
