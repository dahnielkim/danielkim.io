import React, { Fragment } from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';

const Portfolio = props => {
  const bottomSegment = (
    <Fragment>
      <p style={{ marginTop: '2rem' }}>This page is under massive construction.</p>

      <p>Please check back later.</p>
    </Fragment>
  );

  return (
    <SiteLayout
      lang="en"
      seoTitle="Portfolio"
      seoDesc="Portfolio page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader
        topSegment="It's my"
        headerSegment="Projects."
        bottomSegment={bottomSegment}
      />
    </SiteLayout>
  );
};

export default Portfolio;
