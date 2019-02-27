import React from "react";
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import "./SocialIcons.css";

const SocialIcons = props => {
    return (
        <div>
            <a href={props.githubUrl}>
                <FaGithubAlt className="social-icon-left" />
            </a>

            <a href={props.linkedinUrl}>
                <FaLinkedinIn className="social-icon linkedin" />
            </a>

            <a href={props.twitterUrl}>
                <FaTwitter className="social-icon twitter" />
            </a>
        </div>
    );
};

export default SocialIcons;
