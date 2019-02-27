import React from "react";
import { graphql, Link } from "gatsby";
import { FaFolderOpen } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import { formatReadingTime, formatPostDate } from "../utils/helpers";

import "./index.css";

const Layout = props => {
    const { location, data } = props;
    const { edges } = data.allMarkdownRemark;

    return (
        <div>
            <SEO
                lang="en"
                title="DANIELKIM.IO"
                description="Thoughts and topics of various things I am passionate about"
                slug="/"
            />
            
            <Header location={location} />

            <div className="body-content">
                {edges.map(edge => {
                    const { frontmatter, timeToRead } = edge.node;

                    return (
                        <div
                            style={{ marginBottom: "1rem", marginTop: "1rem" }}
                            className="body-content"
                            key={frontmatter.path}
                        >
                            <div>
                                <FaFolderOpen style={{ fontSize: 12 }} />
                                <span className="body-tags">
                                    <Link to={`/tags/${frontmatter.tags}`}>
                                        {frontmatter.tags}
                                    </Link>
                                </span>
                            </div>

                            <Link to={frontmatter.path}>
                                <div className="post-title">
                                    {frontmatter.title}
                                </div>
                            </Link>

                            <div className="post-date">
                                {formatPostDate(frontmatter.date, "en")}
                                {`${formatReadingTime(timeToRead)}`}
                            </div>

                            <div className="post-excerpt">
                                {frontmatter.excerpt}
                            </div>
                        </div>
                    );
                })}
            </div>

            <Footer />
        </div>
    );
};

// dynamic query that gets all posts and sorts based on date
export const query = graphql`
    query HomepageQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    timeToRead
                    frontmatter {
                        title
                        path
                        date
                        tags
                        excerpt
                    }
                }
            }
            totalCount
        }
    }
`;

export default Layout;
