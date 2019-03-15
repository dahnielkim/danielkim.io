import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Header, Container, Grid, Segment, Image, Label } from 'semantic-ui-react';

/**
 * RecentHobbies component displays the first 2 recent blog posts
 * on the home page
 */
class RecentHobbies extends Component {
  render() {
    const { edges } = this.props;

    console.log(this.props.imgSizeSrc, 'props');

    // first two recent posts in an array so that it can be mapped and rendered
    const recentHobbiesArray = edges.slice(0, 2);
    const renderCurrentPosts = recentHobbiesArray.map(posts => {
      const { frontmatter } = posts.node;
      const blogTag = frontmatter.tags.filter(tag => {
        return tag !== 'hobbies';
      });
      const pathLink = `/hobbies/${frontmatter.path}`;

      return (
        <Grid.Column computer={8} tablet={8} mobile={16} key={frontmatter.path}>
          <Segment raise>
            <Header as="h3">{frontmatter.title}</Header>
            <Label color="blue" floating>
              {blogTag}
            </Label>
            <Image
              fluid
              src={this.props.imgSizeSrc.src}
              style={{ marginBottom: '2.5rem' }}
            />
            <Label attached="bottom">
              <Link to={pathLink}>Explore the Adventure →</Link>
            </Label>
          </Segment>
        </Grid.Column>
      );
    });

    return (
      <Container style={{ marginTop: '6rem', marginBottom: '4rem' }}>
        <Grid container columns={2}>
          <Header
            as="h3"
            style={{ letterSpacing: 10, color: 'rgba(0, 0, 0, 0.4)', marginBottom: 0 }}
          >
            RECENT HOBBIES
          </Header>

          <Grid.Row>{renderCurrentPosts}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default RecentHobbies;
