import React, { Component } from 'react';
import { graphql } from 'gatsby';
import SiteLayout from '../components/SiteLayout';
import HomeMainHeader from '../components/HomeMainHeader';
import './index.css';
import RecentPosts from '../components/RecentPosts/RecentPosts';

class Layout extends Component {
  render() {
    const { location, data } = this.props;
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
          <HomeMainHeader />

          <RecentPosts edges={edges} />
        </SiteLayout>
      </div>
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
          }
        }
      }
      totalCount
    }
  }
`;

export default Layout;
