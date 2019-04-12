import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TwoCurrentHobbies from '../TwoCurrentHobbies';

/**
 * RecentHobbies component displays the first 2 recent blog posts
 * on the home page
 * props = edges, imgSizeSrc
 * edges = hobbiesEdges
 * imgSizeSrc = featuredImage.childImageSharp.sizes
 */
class RecentHobbies extends Component {
  render() {
    const { edges } = this.props;
    const recentHobbiesArray = edges.slice(0, 2);
    const renderCurrentPosts = recentHobbiesArray.map(post => {
      const { frontmatter } = post.node;
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
          imageSrc={this.props.imgSizeSrc.src}
        />
      );
    });

    return (
      <Container style={{ marginTop: '6rem' }}>
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
