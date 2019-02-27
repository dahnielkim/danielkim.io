import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { graphql, Link } from "gatsby";
import { FaFolderOpen } from "react-icons/fa";
import { formatReadingTime, formatPostDate } from "../utils/helpers";

import "./index.css";

const Layout = ({ data }) => {
    const { edges } = data.allMarkdownRemark;

    return (
        <div>
            <Header />

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
