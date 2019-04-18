import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Container, Grid } from 'semantic-ui-react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';

const AllTagsTemplate = props => {
  const { tags } = props.pageContext;
  const bottomSegment = (
    <Fragment>
      <p style={{ marginTop: '2rem' }}>
        This page allows you to search searching for specific posts based on tag.
      </p>
    </Fragment>
  );

  return (
    <SiteLayout
      lang="en"
      seoTitle="Tags"
      seoDesc="Articles associated with a certain tag on danielkim.io"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader
        topSegment="It's time to"
        headerSegment="Search."
        bottomSegment={bottomSegment}
      />

      <Container>
        <Grid>
          <Grid.Column>
            <ul style={{ marginTop: '-2rem', marginBottom: '5rem' }}>
              {tags.map((tagName, index) => {
                return (
                  <li key={index}>
                    <Link to={`/tags/${tagName}`}>{tagName}</Link>
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

export default AllTagsTemplate;
