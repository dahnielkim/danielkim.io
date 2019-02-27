import React from "react";
import { Link } from "gatsby";

const TitleAndDescription = ({ data }) => {
    const title = data.site.siteMetadata.title;
    const description = data.site.siteMetadata.description;

    return (
        <div>
            <div>
                <h2>
                    <Link to="/">{title}</Link>
                </h2>
                <p style={{ marginBottom: 10 }}>{description}</p>
            </div>
        </div>
    );
};

export default TitleAndDescription;
