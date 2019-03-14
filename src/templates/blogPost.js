import React from "react";
import { graphql } from "gatsby";
import TagItem from "../components/TagItem";
import SiteLayout from "../components/SiteLayout";
import BlogFooter from "../components/BlogFooter";
import { formatPostDate, formatReadingTime } from "../utils/helpers";

const Template = props => {
    const { pageContext, data, location } = props;

    // gets next and prev path slugs
    const { next, prev } = pageContext;
    const { markdownRemark } = data;
    const html = markdownRemark.html;
    const tag = pageContext.tag[0];

    return (
        <div>
            <SiteLayout
                lang="en"
                seoTitle={markdownRemark.frontmatter.title}
                seoDesc={markdownRemark.frontmatter.excerpt}
                seoSlug={`/${pageContext.pathSlug}`}
                location={location}
            >
                <article className="blog-post">
                    <header>
                        <TagItem
                            tagLink={`/tags/${tag}`}
                            tagName={tag}
                        />

                        <h1 className="blog-post-title">
                            {markdownRemark.frontmatter.title}
                        </h1>

                        <p className="text-center">
                            {formatPostDate(
                                markdownRemark.frontmatter.date,
                                "en"
                            )}
                            {formatReadingTime(markdownRemark.timeToRead)}
                        </p>
                    </header>

                    <div dangerouslySetInnerHTML={{ __html: html }} />

                    <BlogFooter prev={prev} next={next} />
                </article>
            </SiteLayout>
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
                excerpt
            }
            timeToRead
        }
    }
`;

export default Template;
