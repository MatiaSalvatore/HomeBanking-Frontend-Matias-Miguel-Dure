import React from "react";
import {navitems} from "../utils/navitems";
import Anchor from "./Anchor";
import logo from "../assets/bank_logo.png"

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"></img>
            <nav>
                {
                    navitems.map((link, index) => {
                        console.log(link)
                        return (<Anchor key={index} href={link.href} content={link.name}></Anchor>)
                    })   
                }
            </nav>
        </header>
    )
}

export default Header;