import React from "react";
import { GiSmallFire } from "react-icons/gi";
import ProfileImg from "../ProfileImg";
import Bio from "./Bio";
import Copyright from "./Copyright";
import "./Footer.css";

const Footer = () => (
    <div>
        <div className="footer-comp">
            <span className="footer-text">
                Created with
                <GiSmallFire className="footer-heart" />
                by:
            </span>

            <ProfileImg />

            <Bio
                twitterUrl="https://www.twitter.com/dahnielkim"
                githubUrl="https://www.github.com/dahnielkim"
                linkedinUrl="https://www.linkedin.com/in/dshkim/"
                occupationTitle="Software Engineer"
                companyName="Vlocity, Inc"
                companyUrl="https://www.vlocity.com"
            />
        </div>

        <Copyright />
    </div>
);

export default Footer;
