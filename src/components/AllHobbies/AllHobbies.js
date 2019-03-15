import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Header, Container, Grid, Segment, Image, Label } from 'semantic-ui-react';

/**
 * AllPosts component displays the first 2 recent blog posts
 * on the home page
 */
class AllHobbies extends Component {
  render() {
    const { posts } = this.props;
    let renderAllHobbies;

    if (posts) {
      renderAllHobbies = posts.map(posts => {
        const { frontmatter } = posts.node;
        const pathLink = `/hobbies/${frontmatter.path}`;
        const blogTag = frontmatter.tags.filter(tag => {
          return tag !== 'hobbies';
        });

        return (
          <Grid.Column computer={8} tablet={8} mobile={16} key={frontmatter.path}>
            <Segment raise>
              <Header as="h3">{frontmatter.title}</Header>
              <Label color="blue" floating>
                {blogTag}
              </Label>
              <Image
                fluid
                src={frontmatter.featuredImage.childImageSharp.fluid.src}
                style={{ marginBottom: '2.5rem' }}
              />
              <Label attached="bottom">
                <Link to={pathLink}>Explore the Adventure →</Link>
              </Label>
            </Segment>
          </Grid.Column>
        );
      });
    }

    return (
      <Container style={{ marginTop: '6rem', marginBottom: '4rem' }}>
        <Grid container columns={2}>
          <Header
            as="h3"
            style={{ letterSpacing: 10, color: 'rgba(0, 0, 0, 0.4)', marginBottom: 0 }}
          >
            ALL POSTS
          </Header>

          <Grid.Row>{renderAllHobbies}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default AllHobbies;
