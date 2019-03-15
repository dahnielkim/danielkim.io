import React from 'react';
import { Link } from 'gatsby';
import './BlogFooter.css';

const BlogFooter = props => {
  return (
    <footer className="center-text footer" style={{ marginTop: '2rem' }}>
      <span className="blog-prev-nav">
        {props.prev && (
          <Link to={`/${props.type}/${props.prev.frontmatter.path}`}>
            ← {props.prev.frontmatter.title}
          </Link>
        )}
      </span>

      <span className="blog-next-nav">
        {props.next && (
          <Link to={`/${props.type}/${props.next.frontmatter.path}`}>
            {props.next.frontmatter.title} →
          </Link>
        )}
      </span>
    </footer>
  );
};

export default BlogFooter;
