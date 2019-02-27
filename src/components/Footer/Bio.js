import React from "react";

import SocialIcons from "../SocialIcons";

const Bio = props => (
    <div>
        <h2 className="footer-name">Daniel Kim</h2>

        <p className="footer-occupation">
            {props.occupationTitle} at{" "}
            <a href={props.companyUrl}>{props.companyName}</a>
        </p>

        <SocialIcons
            twitterUrl={props.twitterUrl}
            githubUrl={props.githubUrl}
            linkedinUrl={props.linkedinUrl}
        />
    </div>
);

export default Bio;
