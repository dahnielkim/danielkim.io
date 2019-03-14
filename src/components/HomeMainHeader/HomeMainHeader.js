import React from 'react';
import { Link } from 'gatsby';
import { Header, Container, Grid } from 'semantic-ui-react';

const HomeMainHeader = () => {
  return (
    <Container>
      <Grid container columns={1} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={10} computer={8}>
            <p style={{ marginBottom: '1rem' }}>Hey, I'm</p>

            <Header
              as="h1"
              style={{ fontSize: '4rem', marginTop: 0, lineHeight: '4rem' }}
            >
              Daniel Kim.
            </Header>

            <p style={{ marginTop: '2rem' }}>Welcome to my page.</p>

            <p>
              A collection of <Link to="/blog">thoughts</Link>, hobbies,{' '}
              <Link to="/portfolio">projects</Link>, and various things I am passionate
              about.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default HomeMainHeader;
