import React, { Component, Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import SiteLayout from '../components/SiteLayout';
import RecentPosts from '../components/RecentPosts';
import PageHeader from '../components/PageHeader';
import 'semantic-ui-less/semantic.less';
import './index.css';

class Layout extends Component {
  render() {
    let blogEdges = [];

    if (this.props.data.markdown) {
      blogEdges = this.props.data.markdown.edges.filter(value => {
        return value.node.frontmatter.tags.includes('articles');
      });
    }

    const bottomSegment = (
      <Fragment>
        <p style={{ marginTop: '2rem' }}>Welcome to my page.</p>

        <p>
          A collection of <Link to="/articles">articles</Link> and various things I am
          passionate about.
        </p>

        {/* TODO: once portfolio is finished, use this */}
        {/* <p>
          A collection of <Link to="/articles">articles</Link>,{' '}
          <Link to="/portfolio">projects</Link>, and various things I am passionate about.
        </p> */}
      </Fragment>
    );

    return (
      <SiteLayout
        lang="en"
        seoTitle="DANIELKIM.IO"
        seoDesc="Welcome to danielkim.io. Let's share experiences!"
        seoSlug="/"
        location={this.props.location}
      >
        <PageHeader
          topSegment="Hey, I'm"
          headerSegment="Daniel Kim."
          bottomSegment={bottomSegment}
          logo={this.props.data.file.childImageSharp.sizes}
        />

        {blogEdges.length > 0 ? <RecentPosts edges={blogEdges} /> : null}
      </SiteLayout>
    );
  }
}

export const query = graphql`
  query HomepageQuery {
    markdown: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerptAst
          timeToRead
          frontmatter {
            title
            path
            date
            tags
            excerpt
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
      totalCount
    }
    file: file(relativePath: { eq: "assets/signature-logo.png" }) {
      childImageSharp {
        sizes {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`;

export default Layout;
