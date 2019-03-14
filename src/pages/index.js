import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import SiteLayout from '../components/SiteLayout';
import TagItem from '../components/TagItem';
import Pagination from '../components/Pagination';
import HomeMainHeader from '../components/HomeMainHeader';
import { formatReadingTime, formatPostDate } from '../utils/helpers';
import './index.css';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      totalItems: 10,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { location, data } = this.props;
    const { currentPage, totalItems } = this.state;
    const { edges } = data.allMarkdownRemark;
    const indexLastPost = currentPage * totalItems;
    const indexFirstPost = indexLastPost - totalItems;
    const currentPost = [...edges].slice(indexFirstPost, indexLastPost);
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(edges.length / totalItems); i++) {
      pageNumbers.push(i);
    }

    const renderCurrentPosts = currentPost.map(posts => {
      const { frontmatter, timeToRead, excerptAst } = posts.node;
      const excerptArr = excerptAst.children;
      let imgProp;

      const imgExcerpt = excerptArr.find(excerpt => {
        if (excerpt.children[0].tagName === 'img') {
          return excerpt;
        }
        return undefined;
      });

      if (imgExcerpt) {
        imgProp = imgExcerpt.children[0].properties;
      }

      return (
        <div className="post-wrapper" key={frontmatter.path}>
          <TagItem tagLink={`/tags/${frontmatter.tags}`} tagName={frontmatter.tags} />

          <Link to={frontmatter.path}>
            <div className="post-title">{frontmatter.title}</div>
          </Link>

          <div className="post-date">
            {formatPostDate(frontmatter.date, 'en')}
            {`${formatReadingTime(timeToRead)}`}
          </div>

          {imgProp ? (
            <Link to={frontmatter.path}>
              <img className="preview-img" alt="blog poster" src={imgProp.src} />
            </Link>
          ) : null}

          <div className="post-excerpt">{frontmatter.excerpt}</div>
        </div>
      );
    });

    const renderPageNumbers = pageNumbers.map(index => {
      return (
        <Pagination
          key={index}
          id={index}
          handleClick={this.handleClick}
          number={index}
        />
      );
    });

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

          <div className="body-content">{renderCurrentPosts}</div>

          {pageNumbers.length > 1 ? (
            <div className="pagination">{renderPageNumbers}</div>
          ) : (
            ''
          )}
        </SiteLayout>
      </div>
    );
  }
}

// dynamic query that gets all posts and sorts based on date
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
