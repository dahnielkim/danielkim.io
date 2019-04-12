import React from 'react';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import AllPosts from '../components/AllPosts';

/**
 * AllBlogPostsTemplate component.
 * Notes main page.
 */
const AllBlogPostsTemplate = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Notes"
      seoDesc="Notes page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader topSegment="It's my" headerSegment="Notes." />

      <AllPosts posts={props.pageContext.posts} />
    </SiteLayout>
  );
};

export default AllBlogPostsTemplate;
