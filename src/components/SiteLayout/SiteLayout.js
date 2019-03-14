import React, { Fragment } from 'react';
import SEO from '../SEO';
import Navigation from '../Navigation';
import Footer from '../Footer';

/**
 * SiteLayout component provides rendering of SEO,
 * navigation bar, and Footer
 */
const SiteLayout = props => {
  return (
    <Fragment>
      <SEO
        lang={props.lang}
        title={props.seoTitle}
        description={props.seoDesc}
        slug={props.seoSlug}
      />

      <Navigation location={props.location} />

      {props.children}

      <Footer />
    </Fragment>
  );
};

export default SiteLayout;
