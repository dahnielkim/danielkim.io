import React from "react"
import { graphql, Link } from "gatsby"

const Template = ({ data, pageContext }) => {
    // gets next and prev path slugs
    const { next, prev } = pageContext
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html

    return (
        <div>
            <h1 className="header-comp">{title}</h1>
            <div
                className="blog-post"
                dangerouslySetInnerHTML={{ __html: html }}
            />

            {next && <Link to={next.frontmatter.path}>Next</Link>}

            {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
        </div>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default Template
