import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';

const HomeMainHeader = () => {
  return (
    <Grid container columns={1}>
      <Grid.Column mobile={16} tablet={10} computer={8}>
        <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <p style={{ marginBottom: '1rem' }}>Hey, I'm</p>

          <Header as="h1" style={{ fontSize: '4rem', marginTop: 0, lineHeight: '4rem' }}>
            Daniel Kim.
          </Header>

          <p style={{ marginTop: '2rem' }}>Welcome to my page.</p>

          <p>
            A collection of thoughts, hobbies, projects, and various things I am
            passionate about.
          </p>
        </Container>
      </Grid.Column>
    </Grid>
  );
};

export default HomeMainHeader;
