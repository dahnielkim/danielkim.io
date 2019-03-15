import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Container, Grid } from 'semantic-ui-react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import { formatPostDate } from '../utils/helpers';

const SingleTagsTemplate = props => {
  const { location, pageContext } = props;
  const { posts, tagName } = pageContext;
  const seoDesc = `Posts by DANIELKIM.IO about ${tagName}`;
  const bottomSegment = (
    <Fragment>
      <p style={{ marginTop: '2rem' }}>
        This page allows you to search for specific posts based on {tagName}.
      </p>
    </Fragment>
  );

  // Gets the subURL => hobbies or blog
  const subUrl = posts[0].frontmatter.tags.filter(tag => {
    return tag !== tagName;
  })[0];

  return (
    <SiteLayout
      lang="en"
      seoTitle={tagName}
      seoDesc={seoDesc}
      seoSlug={location.pathname}
      location={location}
    >
      <PageHeader
        topSegment="It's time to"
        headerSegment="Search."
        bottomSegment={bottomSegment}
      />

      <Container>
        <Grid>
          <Grid.Column>
            <ul style={{ marginTop: '-2rem', marginBottom: '4rem' }}>
              {posts.map((post, index) => {
                return (
                  <li key={index}>
                    <Link to={`/${subUrl}/${post.frontmatter.path}`}>
                      {post.frontmatter.title} - (
                      {formatPostDate(post.frontmatter.date, 'en')})
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Grid.Column>
        </Grid>
      </Container>
    </SiteLayout>
  );
};

export default SingleTagsTemplate;
