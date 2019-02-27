import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const Portfolio = props => {
    const { location } = props;

    return (
        <div>
            <SEO
                lang="en"
                title="Portfolio"
                description="Portfolio page for Daniel Kim"
                slug={`/${props.pageContext.pathSlug}`}
            />

            <Header location={location} />

            <div className="body-content">
                My portfolio is currently under construction... Tinker tinker...
            </div>

            <Footer />
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
