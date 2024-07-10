import React from "react";
import '../Header/Header.css'
import Logo from '../Images/1000_F_820291677_fEfmaPg7YbI2uxoWIDU3G0245x7ojVe0-removebg-preview.png'

function header (){
    return(
        <div className="header">
            <div className="header-container">
                <ul>
                    <div className="logo">
                    <img  src={Logo}/>
                    </div>
                    <li><a href="">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="">Exprience</a></li>
                    <li><a href="">Contact</a></li>
                    <button className="connect-btn">Connect</button>
                </ul>
            </div>
        </div>
    )
}

export default header