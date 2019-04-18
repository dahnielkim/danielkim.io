import React from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import AllPosts from '../components/AllPosts';

const AllBlogPostsTemplate = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Articles"
      seoDesc="Articles page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader topSegment="It's my" headerSegment="Articles." />

      <AllPosts posts={props.pageContext.posts} />
    </SiteLayout>
  );
};

export default AllBlogPostsTemplate;
