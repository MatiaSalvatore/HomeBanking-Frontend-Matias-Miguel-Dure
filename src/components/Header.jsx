import React from "react";
import {navitems} from "../utils/navitems";
import Anchor from "./Anchor";
import logo from "../assets/bank_logo.png"
import LogoutButton from "./LogoutButton";
import insta from "../assets/insta.png";
import linked from "../assets/linkedin.png";
import face from "../assets/face.png";
import whatspp from "../assets/whatsapp.png";

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"></img>
            <nav>
                {
                    navitems.map((link, index) => {
                        console.log(link)
                        return (<Anchor key={index} href={link.href} content={link.name} onClick={link.function}></Anchor>)
                    })   
                }
                <LogoutButton></LogoutButton>
            </nav>
            <p>&#169; 2024 - Matías Miguel Dure All rights reserved</p>
            <div className="socialmediacontainer">
                <img src={insta}></img>
                <img src={linked}></img>
                <img src={whatspp}></img>
                <img src={face}></img>
            </div>
        </header>
    )
}

export default Header;