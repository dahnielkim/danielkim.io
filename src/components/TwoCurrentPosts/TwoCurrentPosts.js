import React from 'react';
import { Link } from 'gatsby';
import { Header, Grid } from 'semantic-ui-react';
import TagItem from '../TagItem';
import { formatReadingTime, formatPostDate } from '../../utils/helpers';

/**
 * TwoCurrentPosts component.
 * This resuable component is actually more than just 2. This will display all
 * blog posts.
 */
const TwoCurrentPosts = props => {
  return (
    <Grid.Column
      computer={props.mainPage ? 8 : 16}
      tablet={props.mainPage ? 8 : 16}
      mobile={16}
      key={props.frontmatter.path}
      style={{marginBottom: '3rem'}}
    >
      <Grid.Row>
        <Link to={props.pathLink}>
          <Header as="h3">{props.frontmatter.title}</Header>
        </Link>
      </Grid.Row>

      <Grid.Row style={{ marginTop: '0.5rem', color: 'rgba(0, 0, 0, 0.4)' }}>
        {props.frontmatter.excerpt}
      </Grid.Row>

      <Grid.Row style={{ marginTop: '0.5rem', color: 'rgba(0, 0, 0, 0.4)' }}>
        {formatPostDate(props.frontmatter.date, 'en')}

        {`${formatReadingTime(props.timeToRead)}`}

        <TagItem tagLink={`/tags/${props.blogTag}`} tagName={props.blogTag} />
      </Grid.Row>

      <Grid.Row style={{ marginTop: '0.5rem' }}>
        <Link to={props.pathLink}>Read more →</Link>
      </Grid.Row>
    </Grid.Column>
  );
};

export default TwoCurrentPosts;
