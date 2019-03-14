import React from 'react';
import SiteLayout from '../components/SiteLayout';
import PortfolioMainHeader from '../components/PortfolioMainHeader';

const Portfolio = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Portfolio"
      seoDesc="Portfolio page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PortfolioMainHeader />
    </SiteLayout>
  );
};

export default Portfolio;
