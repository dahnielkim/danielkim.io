import React from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import UsesContent from '../components/UsesContent';

const Uses = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Uses"
      seoDesc="Uses page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader topSegment="Here is my" headerSegment="Setup." />

      <UsesContent workstationPicSrc={props.pageContext.result.data.file} />
    </SiteLayout>
  );
};

export default Uses;
