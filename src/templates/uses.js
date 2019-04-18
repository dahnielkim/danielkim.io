import React from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import UsesContent from '../components/UsesContent';
import OneColumnWrapper from '../components/OneColumnWrapper';

const Uses = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Uses"
      seoDesc="Page that outlines Daniel Kim's setup"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader topSegment="Here is my" headerSegment="Setup." />

      <OneColumnWrapper>
        <UsesContent workstationPicSrc={props.pageContext.result.data.file} />
      </OneColumnWrapper>
    </SiteLayout>
  );
};

export default Uses;
