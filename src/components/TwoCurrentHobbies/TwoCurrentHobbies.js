import React from 'react';
import { Link } from 'gatsby';
import { Header, Grid, Segment, Image, Label } from 'semantic-ui-react';

/**
 * TwoCurrentHobbies component.
 * This resuable component is actually more than just 2. This will display all
 * hobbies posts.
 */
const TwoCurrentHobbies = props => {
  return (
    <Grid.Column
      computer={8}
      tablet={8}
      mobile={16}
      key={props.frontmatter.path}
      style={{ marginBottom: '2rem' }}
    >
      <Segment secondary color="blue">
        <Link to={props.pathLink}>
          <Header as="h3" textAlign="center" style={{ marginBottom: '1rem' }}>
            {props.frontmatter.title}
          </Header>
        </Link>

        <Label color="blue" floating>
          <Link to={`/tags/${props.blogTag}`}>#{props.blogTag}</Link>
        </Label>

        <Link to={props.pathLink}>
          <Image fluid src={props.imageSrc} style={{ marginBottom: '2.5rem' }} />
        </Link>

        <Label attached="bottom">
          <Link to={props.pathLink}>Explore the Adventure →</Link>
        </Label>
      </Segment>
    </Grid.Column>
  );
};

export default TwoCurrentHobbies;
