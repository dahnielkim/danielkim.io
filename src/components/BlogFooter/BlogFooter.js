import React from 'react';
import { Link } from 'gatsby';
import { Grid } from 'semantic-ui-react';
import './BlogFooter.css';

const BlogFooter = props => {
  return (
    <footer className="center-text footer dkim-footer-container">
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={8} textAlign="left">
            <span className="blog-prev-nav">
              {props.prev && (
                <Link to={`/${props.type}/${props.prev.frontmatter.path}`}>
                  ← {props.prev.frontmatter.title}
                </Link>
              )}
            </span>
          </Grid.Column>

          <Grid.Column width={8} textAlign="right">
            <span className="blog-next-nav">
              {props.next && (
                <Link to={`/${props.type}/${props.next.frontmatter.path}`}>
                  {props.next.frontmatter.title} →
                </Link>
              )}
            </span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </footer>
  );
};

export default BlogFooter;
