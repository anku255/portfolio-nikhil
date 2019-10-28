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
    title: 'MusicGen',
    subtitle:
      'Generate music in ABC format using Character-Wise Recurrent Neural Network',
    image: 'musicgen',
    link: 'https://github.com/nj2610/MusicGen'
  },
  {
    title: 'IC detection from Printed Circuit Board',
    subtitle:
      'Located and Extracted all of the Integrated Circuits (ICs) present in the image of Printed Circuit Board',
    image: 'ic-board',
    link: 'https://github.com/nj2610/IC_Recognition'
  },
  {
    title: 'Sentiment Analysis',
    subtitle:
      'Performed Sentiment Analysis on the Imdb movie review dataset using RNNs',
    image: 'reviews',
    link: 'https://github.com/nj2610/IC_Recognition.'
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <WaveSection>
        <h1 className="intro-title">Hello!</h1>
        <p>
          I'm Nikhil Kumar Jha, a Machine Learning and Deep Learning enthusiast
          with a background in Computer Science. I build highly scaleable web
          apps, contribute to open source, and write fiction in my spare time!
        </p>
        <br />
        <p>
          <Link to="/projects" button>
            Projects
          </Link>
          &nbsp;
          <Link to="/nikhil-kumar-jha-resume.pdf" external secondary button>
            Download Resume
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
