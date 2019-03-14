import React from 'react';
import { Link } from 'gatsby';
import { Grid, Image, Container, List, Divider } from 'semantic-ui-react';

const Footer = () => (
  <Container textAlign="center">
    <Divider style={{ marginBottom: '2rem' }} />

    <Grid container textAlign="center">
      <Grid.Row>
        <Link to="/">
          <Image style={{ height: 45 }} src="/assets/profile_pic_circular.png" />
        </Link>
      </Grid.Row>

      <Grid.Row>
        <List horizontal divided link size="small">
          <List.Item
            style={{ color: 'black' }}
            as="a"
            href="https://www.linkedin.com/in/dshkim/"
          >
            LinkedIn
          </List.Item>

          <List.Item
            style={{ color: 'black' }}
            as="a"
            href="https://www.github.com/dahnielkim"
          >
            GitHub
          </List.Item>

          <List.Item
            style={{ color: 'black' }}
            as="a"
            href="https://www.twitter.com/dahnielkim"
          >
            Twitter
          </List.Item>
        </List>
      </Grid.Row>

      <Grid.Row style={{ fontSize: 13, color: 'rgb(0,0,0,0.4)', marginBottom: '1rem' }}>
        © 2019 Daniel Kim. All Rights Reserved.
      </Grid.Row>
    </Grid>
  </Container>
);

export default Footer;
