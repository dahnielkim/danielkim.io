import React from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import AllPosts from '../components/AllPosts';

/**
 * AllBlogPostsTemplate component.
 * Blog main page.
 */
const AllBlogPostsTemplate = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Blog"
      seoDesc="Blog page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader topSegment="It's my" headerSegment="Blog." />

      <AllPosts posts={props.pageContext.posts} />
    </SiteLayout>
  );
};

export default AllBlogPostsTemplate;