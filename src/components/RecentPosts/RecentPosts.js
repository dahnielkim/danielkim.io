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

    // first two recent posts
    const recentPostsArray = edges.slice(0, 2);

    console.log(edges, 'edges');

    const renderCurrentPosts = recentPostsArray.map(posts => {
      const { frontmatter, timeToRead } = posts.node;

      return (
        <Grid.Column computer={8} tablet={8} mobile={16} key={frontmatter.path}>
          <Grid.Row>
            <Link to={frontmatter.path}>
              <Header as="h3">{frontmatter.title}</Header>
            </Link>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '0.5rem', color: 'rgba(0, 0, 0, 0.4)' }}>
            <div className="post-excerpt">{frontmatter.excerpt}</div>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '0.5rem', color: 'rgba(0, 0, 0, 0.4)' }}>
            <div className="post-date">
              {formatPostDate(frontmatter.date, 'en')}
              {`${formatReadingTime(timeToRead)}`}
              <TagItem tagLink={`/tags/${frontmatter.tags}`} tagName={frontmatter.tags} />
            </div>
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
