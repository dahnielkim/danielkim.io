import React from "react";
import { StaticQuery, graphql } from "gatsby";
import TitleAndDescription from "./TitleAndDescription";
import Navbar from "../Navbar";
import "./Header.css";

const Header = props => {
    const { location } = props;

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
            render={data => {
                return (
                    <div className="header-bottom-comp">
                        <div className="header-comp">
                            <TitleAndDescription data={data} />
                        </div>

                        <Navbar pathName={location.pathname} />
                    </div>
                );
            }}
        />
    );
};

export default Header;
