import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Header, Container, Grid } from 'semantic-ui-react';
import TagItem from '../TagItem';
import { formatReadingTime, formatPostDate } from '../../utils/helpers';

/**
 * AllPosts component displays the first 2 recent blog posts
 * on the home page
 */
class AllPosts extends Component {
  render() {
    const { posts } = this.props;

    // renders the recent posts
    const renderAllPosts = posts.map(posts => {
      const { frontmatter, timeToRead } = posts.node;
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
            <TagItem tagLink={`/tags/${frontmatter.tags}`} tagName={frontmatter.tags} />
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
            ALL POSTS
          </Header>

          <Grid.Row>{renderAllPosts}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default AllPosts;
