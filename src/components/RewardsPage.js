import React from 'react';
import "./RewardsPage.css"
import RoundButton from "./RoundButton";

function RewardsPage(props) {
    return (
        <div className="RewardsPage">
            <div className="RewardsPageInfo">
                <h1>Manage SOD locks and stakes</h1>
                <p>Stake SOD to share platform fees, or lock it for 3 months to receive platform fees AND exit
                    penalties.</p>
            </div>
            <div className="RewardsPageLocked">
                <div className="RewardsPageLockedTab">
                    <div className="TabInfo">
                        <h3>Your Locked + Staked SOD</h3>
                        <h2>$0</h2>
                    </div>
                    <div className="TabInfo">
                        <h3>Your Locked + Staked SOD</h3>
                        <h2>$0</h2>
                    </div>
                    <div className="TabInfo">
                        <h3>Your Locked + Staked SOD</h3>
                        <h2>$0</h2>
                    </div>
                </div>
                <div className="RewardsPageLockedTab">
                    <div className="TabInfo">
                        <h3>Your Locked + Staked SOD</h3>
                        <h2>$0</h2>
                    </div>
                    <div className="TabInfo">
                        <h3>Your Locked + Staked SOD</h3>
                        <h2>$0</h2>
                    </div>
                </div>
            </div>

            <div className="RewardsPageBlocks">
                <div className="RewardsPageBlockLeft">
                    <div className="RewardsPageBlockLeftItem">
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <h2>Stake SOD</h2>
                            <RoundButton title="APR 60.39%"/>
                        </div>
                        <p>Stake SOD and earn platform fees with no lockup period.</p>
                        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                            <p>Wallet Balance</p>
                            <p>0 SOD</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <RoundButton title="Stake SOD"/>
                        </div>
                    </div>

                    <div className="RewardsPageBlockLeftItem">
                        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                            <h2>Lock SOD</h2>
                            <RoundButton title="APR 288.15%"/>
                        </div>
                        <p>Lock BLZZ and earn platform fees and penalty fees in unlocked BLZZ.</p>
                        <p>Locked BLZZ is subject to a three month lock and will continue to earn fees after the locks
                            expire if you do not withdraw.</p>
                        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                            <p>Wallet Balance</p>
                            <p>0 SOD</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <RoundButton title="Lock SOD"/>
                        </div>
                    </div>
                </div>

                <div className="RewardsPageBlockRight">
                    <div className="UnlockedSod">
                        <div className="UnlockedSodCol">
                            <h2>Unlocked SOD</h2>
                            <p>Staked SOD and expired SOD vests</p>
                        </div>
                        <div>
                            <p>0 SOD</p>
                        </div>
                        <RoundButton title="Claim SOD"/>
                    </div>
                    <div className="UnlockedSod">
                        <div className="UnlockedSodCol">
                            <h2>Unlocked SOD</h2>
                            <p>Staked SOD and expired SOD vests</p>
                        </div>
                        <div>
                            <p>0 SOD</p>
                        </div>
                        <RoundButton title="Claim SOD"/>
                    </div>
                    <div className="UnlockedSod">
                        <div className="UnlockedSodCol">
                            <h2>Unlocked SOD</h2>
                            <p>Staked SOD and expired SOD vests</p>
                        </div>
                        <div>
                            <p>0 SOD</p>
                        </div>
                        <RoundButton title="Claim SOD"/>
                    </div>
                    <div className="UnlockedSod">
                        <div className="UnlockedSodCol">
                            <h2>Unlocked SOD</h2>
                            <p>Staked SOD and expired SOD vests</p>
                        </div>
                        <div>
                            <p>0 SOD</p>
                        </div>
                        <RoundButton title="Claim SOD"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RewardsPage;
