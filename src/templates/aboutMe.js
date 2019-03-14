import React from 'react';
import SiteLayout from '../components/SiteLayout';
import AboutMainHeader from '../components/AboutMainHeader';

const AboutMe = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="About"
      seoDesc="About Me page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <AboutMainHeader />
    </SiteLayout>
  );
};

export default AboutMe;
