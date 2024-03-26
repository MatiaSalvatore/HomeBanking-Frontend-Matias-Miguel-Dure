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
    const token = localStorage.getItem('token')
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"></img>
            <nav>
                <Anchor href="/" content="Dashboard"></Anchor>
                {!token && <Anchor href="/signin" content="Log in"></Anchor>}
                {!token && <Anchor href="/signup" content="Sign up"></Anchor>}
                {token && <Anchor href="/accounts" content="Acounts"></Anchor>}
                {token && <LogoutButton></LogoutButton>}
                
            </nav>
            <p>&#169; 2024 - Matías Miguel Dure All rights reserved</p>
            <div className="socialmediacontainer">
                <a href="https://www.facebook.com/matias.dure.568"><img src={face}></img></a>
                <a href="https://www.linkedin.com/in/mat%C3%ADas-dur%C3%A9-b5b581236/"><img  src={linked}></img></a>
                <a href="https://www.instagram.com/matias.dure18/"><img src={insta}></img></a>
            </div>
        </header>
    )
}

export default Header;