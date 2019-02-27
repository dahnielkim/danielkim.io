import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import "./Header.css";

const TitleAndDescription = ({ data }) => {
    const title = data.site.siteMetadata.title;
    const description = data.site.siteMetadata.description;

    return (
        <div className="header-comp">
            <div>
                <h2>
                    <Link to="/">{title}</Link>
                </h2>
                <p style={{ marginBottom: 10 }}>{description}</p>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        buildTimeZone
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
            `}
            render={data => (
                <div>
                    <TitleAndDescription data={data} />
                </div>
            )}
        />
    );
};

export default Header;
