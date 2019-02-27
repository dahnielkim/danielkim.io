import React from "react";
import { graphql, Link } from "gatsby";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { formatPostDate, formatReadingTime } from "../utils/helpers";

const Template = ({ data, pageContext }) => {
    // gets next and prev path slugs
    const { next, prev } = pageContext;
    const { markdownRemark } = data;
    const title = markdownRemark.frontmatter.title;
    const html = markdownRemark.html;

    return (
        <div>
            <Header />

            <article className="blog-post">
                <header>
                    <h1
                        style={{
                            fontSize: 40,
                            margin: 0,
                            fontWeight: 700,
                            textAlign: "center",
                        }}
                    >
                        {title}
                    </h1>
                    <p style={{ textAlign: "center" }}>
                        {formatPostDate(markdownRemark.frontmatter.date, "en")}
                        {formatReadingTime(markdownRemark.timeToRead)}
                    </p>
                </header>

                <div dangerouslySetInnerHTML={{ __html: html }} />

                <footer className="center-text footer">
                    <span style={{ float: "left" }}>
                        {prev && (
                            <Link to={prev.frontmatter.path}>
                                ← {prev.frontmatter.title}
                            </Link>
                        )}
                    </span>

                    <span style={{ float: "right" }}>
                        {next && (
                            <Link to={next.frontmatter.path}>
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </span>
                </footer>
            </article>

            <Footer />
        </div>
    );
};

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
            timeToRead
        }
    }
`;

export default Template;
