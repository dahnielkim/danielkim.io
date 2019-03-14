import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Header, Container, Grid } from 'semantic-ui-react';
import TagItem from '../TagItem';
import { formatReadingTime, formatPostDate } from '../../utils/helpers';

class RecentPosts extends Component {
  render() {
    const { edges } = this.props;

    console.log(edges, 'edges');

    const renderCurrentPosts = edges.map(posts => {
      const { frontmatter, timeToRead } = posts.node;

      return (
        <Grid.Column computer={8} tablet={8} mobile={16} key={frontmatter.path}>
          <TagItem tagLink={`/tags/${frontmatter.tags}`} tagName={frontmatter.tags} />

          <Link to={frontmatter.path}>
            <Header as="h3">{frontmatter.title}</Header>
          </Link>

          <div className="post-date">
            {formatPostDate(frontmatter.date, 'en')}
            {`${formatReadingTime(timeToRead)}`}
          </div>

          <div className="post-excerpt">{frontmatter.excerpt}</div>
        </Grid.Column>
      );
    });

    return (
      <Container style={{ marginTop: '6rem', marginBottom: '4rem' }}>
        <Grid container columns={2}>
          <Header as="h3">Recent Posts</Header>

          <Grid.Row>{renderCurrentPosts}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default RecentPosts;
