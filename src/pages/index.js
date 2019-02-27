import React from "react";
import { graphql, Link } from "gatsby";
import SiteLayout from "../components/Layout";
import TagItem from "../components/TagItem";
import { formatReadingTime, formatPostDate } from "../utils/helpers";
import "./index.css";

const Layout = props => {
    const { location, data } = props;
    const { edges } = data.allMarkdownRemark;

    return (
        <div>
            <SiteLayout
                lang="en"
                seoTitle="DANIELKIM.IO"
                seoDesc="Thoughts and topics of various things I am passionate about"
                seoSlug="/"
                location={location}
            >
                <div className="body-content">
                    {edges.map(edge => {
                        const { frontmatter, timeToRead } = edge.node;

                        return (
                            <div
                                className="post-wrapper"
                                key={frontmatter.path}
                            >
                                <TagItem
                                    tagLink={`/tags/${frontmatter.tags}`}
                                    tagName={frontmatter.tags}
                                />

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
            </SiteLayout>
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
