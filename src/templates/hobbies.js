import React from 'react';
import SiteLayout from '../components/SiteLayout';
import HobbiesMainHeader from '../components/HobbiesMainHeader';

const Hobbies = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Hobbies"
      seoDesc="Hobbies page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <HobbiesMainHeader />
    </SiteLayout>
  );
};

export default Hobbies;
