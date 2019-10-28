import React from 'react';
import styled from 'styled-components';
import {
  Layout,
  Link,
  SEO,
  WaveSection,
  ProjectGrid,
  ProjectLink
} from 'src/components';

const H3 = styled.h3`
  margin-top: 0;
`;

const projects = [
  {
    title: 'Project 1',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus! Lorem ipsum dolor sit.',
    image: 'harmony',
    link: 'http://test.me'
  },
  {
    title: 'Project 2',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, eaque!',
    image: 'refract',
    link: 'http://test.me'
  },
  {
    title: 'Project 3',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nihil!',
    image: 'refract',
    link: 'http://test.me'
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <WaveSection>
        <h1 className="intro-title">Hello!</h1>
        <p>
          I'm Joe McGrath, a software engineer with a background in design,
          currently working at <Link to="https://webflow.com/">Webflow</Link>. I
          build highly scaleable web apps, contribute to open source, and write
          fiction in my spare time!
        </p>
        <br />
        <p>
          <Link to="/projects" button>
            Projects
          </Link>
          &nbsp;
          <Link to="/resume" secondary button>
            Resume
          </Link>
        </p>
      </WaveSection>

      <>
        <H3>Featured Projects</H3>
        <ProjectGrid>
          {projects.map((project, i) => (
            <ProjectLink key={i} featured={i === 0} {...project} />
          ))}
        </ProjectGrid>
      </>
    </Layout>
  );
};

export default IndexPage;
