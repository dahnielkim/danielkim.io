import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import TagItem from '../components/TagItem';
import SiteLayout from '../components/SiteLayout';
import BlogFooter from '../components/BlogFooter';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

/**
 * Template component for all blog posts
 */
const Template = props => {
  const { pageContext, data, location } = props;

  // gets next and prev path slugs
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const html = markdownRemark.html;
  const tag = pageContext.tag[0];

  return (
    <SiteLayout
      lang="en"
      seoTitle={markdownRemark.frontmatter.title}
      seoDesc={markdownRemark.frontmatter.excerpt}
      seoSlug={`/${pageContext.pathSlug}`}
      location={location}
    >
      <Container style={{ marginTop: '1rem' }}>
        <Img sizes={markdownRemark.frontmatter.featuredImage.childImageSharp.sizes} />

        <Grid container columns={1} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Grid.Row>
            <Grid.Column>
              <Grid.Row style={{ marginBottom: '1rem' }}>
                <Header as="h1">{markdownRemark.frontmatter.title}</Header>
              </Grid.Row>

              <Grid.Row style={{ marginBottom: '1rem', color: 'rgba(0, 0, 0, 0.4)' }}>
                {formatPostDate(markdownRemark.frontmatter.date, 'en')}
                {formatReadingTime(markdownRemark.timeToRead)}
                <TagItem tagLink={`/tags/${tag}`} tagName={tag} />
              </Grid.Row>

              <div dangerouslySetInnerHTML={{ __html: html }} />

              <BlogFooter prev={prev} next={next} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </SiteLayout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      timeToRead
    }
  }
`;

export default Template;
