import React, { Fragment } from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import UsesContent from '../components/UsesContent';

const Uses = props => {
  const bottomSegment = (
    <Fragment>
      <p style={{ marginTop: '2rem' }}>Here is what I like use.</p>
    </Fragment>
  );

  return (
    <SiteLayout
      lang="en"
      seoTitle="Uses"
      seoDesc="Uses page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader
        topSegment="It's my"
        headerSegment="Setup."
        bottomSegment={bottomSegment}
      />

      <UsesContent workstationPicSrc={props.pageContext.result.data.file} />
    </SiteLayout>
  );
};

export default Uses;
