import React from "react";
import ProfileImg from "../ProfileImg";
import SocialIcons from "../SocialIcons";
import { GiSmallFire } from "react-icons/gi";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-comp">
            <span className="footer-text">
                Created with
                <GiSmallFire
                    style={{ marginLeft: 8, marginRight: 8 }}
                    className="footer-heart"
                />
                by:
            </span>

            <ProfileImg />

            <div>
                <h2 style={{ marginTop: 10 }}>Daniel Kim</h2>
                <p style={{ marginBottom: 10 }}>
                    Software Engineer @ Vlocity, Inc
                </p>
                <SocialIcons />
            </div>
        </div>
    );
};

export default Footer;
