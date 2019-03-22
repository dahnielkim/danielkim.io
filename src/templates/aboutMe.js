import React, { Fragment } from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';

const AboutMe = props => {
  const bottomSegment = (
    <Fragment>
      <p style={{ marginTop: '2rem' }}>Construction in Progress.</p>

      <p>
        <span role="img" aria-label="construction">
          🚧
        </span>{' '}
        Hammering away like MC Hammer. Please check back later.{' '}
        <span role="img" aria-label="construction">
          🚧
        </span>
      </p>
    </Fragment>
  );

  return (
    <SiteLayout
      lang="en"
      seoTitle="About"
      seoDesc="About Me page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader topSegment="It's" headerSegment="Me." bottomSegment={bottomSegment} />
    </SiteLayout>
  );
};

export default AboutMe;