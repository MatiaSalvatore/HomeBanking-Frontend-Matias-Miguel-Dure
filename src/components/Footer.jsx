import React from "react";
import insta from "../assets/insta.png";
import linked from "../assets/linkedin.png";
import face from "../assets/face.png";
import whatspp from "../assets/whatsapp.png";

const Footer = () => {
    return (
        <div className="footer">
            <p>&#169; 2024 - Matías Miguel Dure All rights reserved</p>
            <div className="socialmediacontainer">
                <img src={insta}></img>
                <img src={linked}></img>
                <img src={whatspp}></img>
                <img src={face}></img>
            </div>
        </div>
    );
};

export default Footer;