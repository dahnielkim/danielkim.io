import React from "react";
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
    return (
        <div>
            <a href="https://github.com/dahnielkim">
                <FaGithubAlt className="social-icon-left" />
            </a>
            <a href="https://twitter.com/dahnielkim">
                <FaTwitter className="social-icon twitter" />
            </a>
            <a href="https://www.linkedin.com/in/dshkim/">
                <FaLinkedinIn className="social-icon linkedin" />
            </a>
        </div>
    );
};

export default SocialIcons;
