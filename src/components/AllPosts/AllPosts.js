import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TwoCurrentPosts from '../TwoCurrentPosts';
import NoPosts from '../NoPosts';

/**
 * AllPosts component displays the first 2 recent blog posts on the home page
 */
class AllPosts extends Component {
  render() {
    let renderAllPosts = [];

    if (this.props.posts) {
      renderAllPosts = this.props.posts.map(post => {
        const pathLink = `/articles/${post.node.frontmatter.path}`;
        const blogTag = post.node.frontmatter.tags.filter(tag => tag !== 'articles');

        return (
          <TwoCurrentPosts
            key={pathLink}
            pathLink={pathLink}
            frontmatter={post.node.frontmatter}
            timeToRead={post.node.timeToRead}
            blogTag={blogTag}
            mainPage={false}
          />
        );
      });
    } else {
      return <NoPosts />;
    }

    return (
      <Container style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <Grid container columns={2}>
          <Header
            as="h3"
            style={{ letterSpacing: 10, color: 'rgba(0, 0, 0, 0.4)', marginBottom: 0 }}
          >
            ALL ARTICLES
          </Header>

          <Grid.Row>{renderAllPosts}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default AllPosts;
