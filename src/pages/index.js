import React, { Component } from 'react';
import { graphql } from 'gatsby';
import SiteLayout from '../components/SiteLayout';
import HomeMainHeader from '../components/HomeMainHeader';
import RecentPosts from '../components/RecentPosts';
import RecentHobbies from '../components/RecentHobbies';
import 'semantic-ui-less/semantic.less';
import './index.css';

class Layout extends Component {
  render() {
    const { location, data } = this.props;
    const { edges } = data.allMarkdownRemark;
    let hobbiesEdges;
    let blogEdges;
    let hobbiesImgSize;

    if (edges) {
      hobbiesEdges = edges.filter(value => {
        const { tags, featuredImage } = value.node.frontmatter;
        if (tags.includes('hobbies')) {
          hobbiesImgSize = featuredImage.childImageSharp.sizes;
        }
        return tags.includes('hobbies');
      });

      blogEdges = edges.filter(value => {
        const { tags } = value.node.frontmatter;
        return tags.includes('blog');
      });
    }

    console.log(hobbiesEdges, 'hobbies edges');
    return (
      <SiteLayout
        lang="en"
        seoTitle="DANIELKIM.IO"
        seoDesc="Thoughts and topics of various things I am passionate about"
        seoSlug="/"
        location={location}
      >
        <HomeMainHeader />

        <RecentPosts edges={blogEdges} />

        <RecentHobbies edges={hobbiesEdges} imgSizeSrc={hobbiesImgSize} />
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
  }
`;

export default Layout;
