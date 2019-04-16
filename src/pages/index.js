import React, { Component, Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import SiteLayout from '../components/SiteLayout';
import RecentPosts from '../components/RecentPosts';
import RecentHobbies from '../components/RecentHobbies';
import PageHeader from '../components/PageHeader';
import 'semantic-ui-less/semantic.less';
import './index.css';

class Layout extends Component {
  render() {
    const { location, data } = this.props;
    let hobbiesEdges;
    let blogEdges;
    let hobbiesImgSize;

    if (data.allMarkdownRemark) {
      hobbiesEdges = data.allMarkdownRemark.edges.filter(value => {
        const { tags, featuredImage } = value.node.frontmatter;

        if (tags.includes('hobbies')) {
          hobbiesImgSize = featuredImage.childImageSharp.sizes;
        }

        return tags.includes('hobbies');
      });

      blogEdges = data.allMarkdownRemark.edges.filter(value => {
        const { tags } = value.node.frontmatter;

        return tags.includes('notes');
      });
    }

    const bottomSegment = (
      <Fragment>
        <p style={{ marginTop: '2rem' }}>Welcome to my page.</p>

        <p>
          A collection of <Link to="/notes">notes</Link>,{' '}
          <Link to="/hobbies">hobbies</Link>, <Link to="/portfolio">projects</Link>, and
          various things I am passionate about.
        </p>
      </Fragment>
    );

    return (
      <SiteLayout
        lang="en"
        seoTitle="DANIELKIM.IO"
        seoDesc="Thoughts and topics of various things I am passionate about"
        seoSlug="/"
        location={location}
      >
        <PageHeader
          topSegment="Hey, I'm"
          headerSegment="Daniel Kim."
          bottomSegment={bottomSegment}
          logo={data.file.childImageSharp.sizes}
        />

        {blogEdges.length > 0 ? <RecentPosts edges={blogEdges} /> : null}

        {hobbiesEdges.length > 0 ? (
          <RecentHobbies edges={hobbiesEdges} imgSizeSrc={hobbiesImgSize} />
        ) : null}
      </SiteLayout>
    );
  }
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    file(relativePath: { eq: "assets/signature-logo.png" }) {
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
