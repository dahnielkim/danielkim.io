import React from "react"
import Header from "../components/Header"
import { graphql, Link } from "gatsby"
import "./index.css"

const Layout = ({ data }) => {
    const { edges } = data.allMarkdownRemark

    return (
        <div>
            <Header />
            <div className="header-comp">
                {edges.map(edge => {
                    const { frontmatter } = edge.node
                    return (
                        <div
                            style={{ marginBottom: "1rem" }}
                            key={frontmatter.path}
                        >
                            <Link to={frontmatter.path}>
                                {frontmatter.title}
                            </Link>
                        </div>
                    )
                })}

                <Link to="/tags">Browse by Tag</Link>
            </div>
        </div>
    )
}

// dynamic query that gets all posts and sorts based on date
export const query = graphql`
    query HomepageQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }
    }
`

export default Layout
