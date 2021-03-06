import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

/**
 * NoPosts component.
 * This resuable component when there are no posts to display.
 */
const NoPosts = () => {
  return (
    <Container>
      <Grid>
        <Grid.Column
          computer={16}
          tablet={16}
          mobile={16}
          style={{ marginBottom: '2rem' }}
        >
          <Grid.Row>
            <p style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              <span role="img" aria-label="scientist">
                👨🏻‍🔬
              </span>{' '}
              In the lab trying to cook up some posts. Please check back later.{' '}
              <span role="img" aria-label="scientist">
                👨🏻‍🔬
              </span>
            </p>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default NoPosts;
