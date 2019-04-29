import React from 'react';
import { withPrefix, Link } from 'gatsby';
import SiteLayout from '../components/SiteLayout';
import PageHeader from '../components/PageHeader';
import OneColumnWrapper from '../components/OneColumnWrapper';

const AboutMe = props => {
  return (
    <SiteLayout
      lang="en"
      seoTitle="About"
      seoDesc="About Me page for Daniel Kim"
      seoSlug={`/${props.pageContext.pathSlug}`}
      location={props.location}
    >
      <PageHeader headerSegment="About" />

      <OneColumnWrapper>
        <p>
          This website is a compilation of articles and musings written by{' '}
          <Link to="/">Daniel Kim</Link> on various topics ranging from design,
          development, creativity, religion, etc. Currently, I have written a total of{' '}
          <Link className="dkim-link" to="/articles">
            {props.pageContext.posts.length}
          </Link>{' '}
          posts.
        </p>
        <p>
          Originally a process control design engineer working in the pharmaceutical /
          biotech industry, I converted to software development due to my love for
          creating and solving things. I am blessed and privileged to spend every day
          doing what I love.
        </p>
        <p>
          Since the summer of 2018, I have been calling the beautiful city of{' '}
          <a href="https://en.wikipedia.org/wiki/San_Francisco">San Francisco</a> my home.
          Having spent most of my life in North Carolina, I travelled across the country
          in hopes of challenging myself both as a developer and as an individual. What a
          wonderful experience is has been thus far!
        </p>
        <p>
          I love learning new ways to solve old problems. Technology, food, and weight
          training are loves of mine.
        </p>

        <h2>What I am currently doing?</h2>
        <p>
          Currently, I spend my days working at{' '}
          <a href="https://www.vlocity.com">Vlocity, Inc</a> building the company's award
          winning product{' '}
          <a className="dkim-link" href="https://www.vlocity.com/platform#omniscript">
            OmniScript<sub>TM</sub>
          </a>
          and{' '}
          <a className="dkim-link" href="https://www.vlocity.com/platform#dataraptor">
            DataRaptor<sub>TM</sub>
          </a>
          .
        </p>
        <p>
          If I'm not coding or working out at the gym, I am probably stuffing my face with
          some amazing street delicacies.
        </p>

        <h2>What are my professional experiences?</h2>
        <p>
          If you want to learn more about my professional experiences, reach out to me via{' '}
          <a href="https://www.linkedin.com/in/dshkim">LinkedIn</a> or{' '}
          <a href="mailto:dahnielkim@gmail.com?subject=Professional Experiences Inquiry">
            email
          </a>
          . You can also checkout my{' '}
          <a
            rel="noopener noreferrer"
            href={withPrefix('assets/resume.pdf')}
            target="_blank"
          >
            resume
          </a>
          .
        </p>
      </OneColumnWrapper>
    </SiteLayout>
  );
};

export default AboutMe;
