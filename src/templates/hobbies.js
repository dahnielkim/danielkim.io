import React, { Fragment } from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import AllHobbies from '../components/AllHobbies';

const Hobbies = props => {
  const bottomSegment = (
    <Fragment>
      <p style={{ marginTop: '2rem' }}>Includes food, travel, music, and sports.</p>

      <p>Reference the hashtags for specific categories.</p>
    </Fragment>
  );

  return (
    <SiteLayout
      lang="en"
      seoTitle="Hobbies"
      seoDesc="Hobbies page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader
        topSegment="It's my"
        headerSegment="Hobbies."
        bottomSegment={bottomSegment}
      />

      <AllHobbies posts={props.pageContext.posts} />
    </SiteLayout>
  );
};

export default Hobbies;
