import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Header, Container, Grid } from 'semantic-ui-react';
import TagItem from '../TagItem';
import { formatReadingTime, formatPostDate } from '../../utils/helpers';

/**
 * RecentPosts component displays the first 2 recent blog posts
 * on the home page
 */
class RecentPosts extends Component {
  render() {
    const { edges } = this.props;

    // first two recent posts in an array so that it can be mapped and rendered
    const recentPostsArray = edges.slice(0, 2);

    // renders the recent posts
    const renderCurrentPosts = recentPostsArray.map(posts => {
      const { frontmatter, timeToRead } = posts.node;
      const blogTag = frontmatter.tags.filter(tag => {
        return tag !== 'blog';
      });
      const pathLink = `/blog/${frontmatter.path}`;

      return (
        <Grid.Column computer={8} tablet={8} mobile={16} key={frontmatter.path}>
          <Grid.Row>
            <Link to={pathLink}>
              <Header as="h3">{frontmatter.title}</Header>
            </Link>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '0.5rem', color: 'rgba(0, 0, 0, 0.4)' }}>
            {frontmatter.excerpt}
          </Grid.Row>

          <Grid.Row style={{ marginTop: '0.5rem', color: 'rgba(0, 0, 0, 0.4)' }}>
            {formatPostDate(frontmatter.date, 'en')}
            {`${formatReadingTime(timeToRead)}`}
            <TagItem tagLink={`/tags/${blogTag}`} tagName={blogTag} />
          </Grid.Row>

          <Grid.Row style={{ marginTop: '0.5rem' }}>
            <Link to={pathLink}>Read more →</Link>
          </Grid.Row>
        </Grid.Column>
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
