import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TwoCurrentHobbies from '../TwoCurrentHobbies';

/**
 * AllPosts component displays the first 2 recent blog posts
 * on the home page
 */
class AllHobbies extends Component {
  render() {
    const { posts } = this.props;
    let renderAllHobbies;

    if (posts) {
      renderAllHobbies = posts.map(hobby => {
        const { frontmatter } = hobby.node;
        const pathLink = `/hobbies/${frontmatter.path}`;
        const blogTag = frontmatter.tags.filter(tag => {
          return tag !== 'hobbies';
        });

        return (
          <TwoCurrentHobbies
            key={pathLink}
            pathLink={pathLink}
            frontmatter={frontmatter}
            blogTag={blogTag}
            imageSrc={frontmatter.featuredImage.childImageSharp.fluid.src}
          />
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
            ALL HOBBIES
          </Header>

          <Grid.Row>{renderAllHobbies}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default AllHobbies;
