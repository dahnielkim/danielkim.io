import React from 'react';
import SiteLayout from '../components/SiteLayout';
import HobbiesMainHeader from '../components/HobbiesMainHeader';
import AllHobbies from '../components/AllHobbies';

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

      <AllHobbies posts={props.pageContext.posts} />
    </SiteLayout>
  );
};

export default Hobbies;
