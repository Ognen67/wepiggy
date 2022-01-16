import './App.css';
import Header from "./components/Header";
import PictureSlider from "./components/PictureSlider";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BasicTabs from "./components/BasicTabs";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import StakingPage from "./components/StakingPage";
import RewardsPage from "./components/RewardsPage";
import NftDepositWithdraw from "./components/NftDepositWithdraw";
import AboutPage from "./components/AboutPage";

function App() {
    return (
        <div className="App">
            <Router>
                {/*<Header/>*/}
                <Navbar/>
                <div className="AppContent">
                    <Routes>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="*" element={<HomePage/>}/>
                        <Route path="/staking" element={<StakingPage/>}/>
                        <Route path="/rewards" element={<RewardsPage/>}/>
                        <Route path="/nft-deposit-withdraw" element={<NftDepositWithdraw/>}/>
                        <Route path="/about-us" element={<AboutPage/>}/>
                    </Routes>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
