import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TwoCurrentPosts from '../TwoCurrentPosts';
import NoPosts from '../NoPosts';

/**
 * AllPosts component displays the first 2 recent blog posts on the home page
 */
class AllPosts extends Component {
  render() {
    const { posts } = this.props;
    let renderAllPosts;

    if (posts) {
      renderAllPosts = posts.map(post => {
        const { frontmatter, timeToRead } = post.node;
        const pathLink = `/articles/${frontmatter.path}`;
        const blogTag = frontmatter.tags.filter(tag => {
          return tag !== 'articles';
        });

        return (
          <TwoCurrentPosts
            key={pathLink}
            pathLink={pathLink}
            frontmatter={frontmatter}
            timeToRead={timeToRead}
            blogTag={blogTag}
            mainPage={false}
          />
        );
      });
    }
    // When there are no posts
    else {
      return <NoPosts />;
    }

    return (
      <Container style={{ marginTop: '2rem' }}>
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
