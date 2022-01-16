import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import RoundButton from "./RoundButton";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <nav>
            {(toggleMenu || screenWidth > 650) && (
                <ul className="list">
                    {/*<img className="Logo"*/}
                    {/*     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"*/}
                    {/*     alt=""/>*/}

                    <li className="items"><NavLink onClick={toggleNav} className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                                   to="/home">Home</NavLink></li>
                    <li className="items"><NavLink onClick={toggleNav} className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                                   to="/staking">Staking</NavLink></li>
                    <li className="items"><NavLink onClick={toggleNav} className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                                   to="/rewards">Rewards</NavLink></li>
                    <li className="items"><NavLink onClick={toggleNav} className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                                   to="/nft-deposit-withdraw">NFT Deposit/Withdraw</NavLink></li>
                    <li className="items"><NavLink onClick={toggleNav} className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                                   to="#">DAO</NavLink></li>
                    <li className="items"><NavLink onClick={toggleNav} className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                                   to="#">Docs</NavLink></li>
                    <li className="items"><NavLink onClick={toggleNav} className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                                   to="/about-us">About Us</NavLink></li>

                    {/*<div className="AppButton">*/}
                    {/*    <RoundButton title="APP"/>*/}
                    {/*</div>*/}
                </ul>)}


            <div className="btn"><MenuIcon onClick={toggleNav}/></div>
        </nav>
    )
}
