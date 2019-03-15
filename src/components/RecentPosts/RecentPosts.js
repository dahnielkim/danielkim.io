import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TwoCurrentPosts from '../TwoCurrentPosts';

/**
 * RecentPosts component.
 * Displays recent 2 posts and hobbies.
 * props = edges
 * edges = object (frontmatter)
 */
class RecentPosts extends Component {
  render() {
    const recentPostsArr = this.props.edges.slice(0, 2);
    const renderCurrentPosts = recentPostsArr.map(post => {
      const { frontmatter, timeToRead } = post.node;
      const pathLink = `/blog/${frontmatter.path}`;
      const blogTag = frontmatter.tags.filter(tag => {
        return tag !== 'blog';
      });

      return (
        <TwoCurrentPosts
          key={pathLink}
          pathLink={pathLink}
          frontmatter={frontmatter}
          timeToRead={timeToRead}
          blogTag={blogTag}
          mainPage={true}
        />
      );
    });

    return (
      <Container style={{ marginTop: '6rem', marginBottom: '4rem' }}>
        <Grid container columns={2}>
          <Header
            as="h3"
            style={{ letterSpacing: 10, color: 'rgba(0, 0, 0, 0.4)', marginBottom: 0 }}
          >
            RECENT POSTS
          </Header>

          <Grid.Row>{renderCurrentPosts}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default RecentPosts;
