import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import Img from 'gatsby-image';

/**
 * PageHeader component. The reusable component for headers.
 * props = topSegment, bottomSegment, headerSegment
 * topSegment = string
 * headerSegment = string
 * bottomSegment = DOM
 */
const PageHeader = props => {
  return (
    <Container>
      <Grid container columns={2} style={{ marginTop: '3rem' }}>
        <Grid.Row style={{ marginBottom: '2rem' }}>
          <Grid.Column mobile={16} tablet={10} computer={8}>
            {props.topSegment ? (
              <p style={{ marginBottom: '1rem' }}>{props.topSegment}</p>
            ) : null}

            <Header
              as="h1"
              style={{ fontSize: '4rem', marginTop: 0, lineHeight: '4rem' }}
            >
              {props.headerSegment}
            </Header>

            {props.bottomSegment ? props.bottomSegment : null}
          </Grid.Column>

          <Grid.Column only="computer tablet">
            {props.logo ? (
              <Img
                style={{
                  width: '50%',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                sizes={props.logo}
              />
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default PageHeader;
