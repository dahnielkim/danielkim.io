import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

class OneColumnWrapper extends Component {
  render() {
    return (
      <Container>
        <Grid container>
          <Grid.Row style={{ marginBottom: '5rem' }}>
            <Grid.Column>{this.props.children}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default OneColumnWrapper;
