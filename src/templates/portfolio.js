import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Portfolio = props => {
    const { location } = props;

    return (
        <div>
            <Layout
                lang="en"
                seoTitle="Portfolio"
                seoDesc="Portfolio page for Daniel Kim"
                seoSlug={`/${props.pageContext.pathSlug}`}
                location={location}
            >
                <div className="body-content">
                    My portfolio is currently under construction... Tinker
                    tinker...
                </div>
            </Layout>
        </div>
    );
};

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
        }
    }
`;

export default Portfolio;
