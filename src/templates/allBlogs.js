import React from 'react';
import SiteLayout from '../components/SiteLayout';
import BlogMainHeader from '../components/BlogMainHeader';
import AllPosts from '../components/AllPosts';

const AllBlogPostsTemplate = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="Blog"
      seoDesc="All Blog Post page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <BlogMainHeader />

      <AllPosts posts={props.pageContext.posts} />
    </SiteLayout>
  );
};

export default AllBlogPostsTemplate;
