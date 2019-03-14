import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';

const PortfolioMainHeader = () => {
  return (
    <Container>
      <Grid container columns={1} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={10} computer={8}>
            <p style={{ marginBottom: '1rem' }}>It's my</p>

            <Header
              as="h1"
              style={{ fontSize: '4rem', marginTop: 0, lineHeight: '4rem' }}
            >
              Projects.
            </Header>

            <p style={{ marginTop: '2rem' }}>
              This page is under massive construction. Please check back later.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default PortfolioMainHeader;
