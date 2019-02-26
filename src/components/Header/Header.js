import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./Header.css"

const TitleAndDescription = ({ data }) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    return (
        <div className="header-comp">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

const Header = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
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
    )
}

export default Header;