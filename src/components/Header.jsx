import React from "react";
import {navitems} from "../utils/navitems";
import Anchor from "./Anchor";
import logo from "../assets/bank_logo.png"
import LogoutButton from "./LogoutButton";

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
        </header>
    )
}

export default Header;