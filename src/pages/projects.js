import React from 'react';
import styled from 'styled-components';

import {
  Icon,
  Layout,
  Link,
  QueryImage,
  SEO,
  Small,
  WaveSection
} from 'src/components';

const Projects = styled.div`
  section > :first-child {
    margin-top: 0;
  }
`;

const ProjectsPage = () => (
  <Layout activePage="projects">
    <SEO title="Projects" />
    <WaveSection>
      <p>
        Here's a brief introduction to some of the projects I've built or made
        significant contributions to! More details about some of the most
        interesting parts of the projects coming soon...
      </p>
    </WaveSection>

    <Projects>
      <section>
        <h3>Music Gen</h3>
        <h3>
          <QueryImage name="musicgen" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
          laboriosam, qui quam sunt dolor?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi maiores
          totam consequuntur iusto perferendis esse nam nesciunt autem,
          asperiores nihil repellendus nulla eligendi beatae excepturi?
        </p>
        <Small>
          <Link to="https://github.com/nj2610/MusicGen" secondary button>
            <Icon name="GitHub" /> Code
          </Link>
        </Small>
      </section>

      <WaveSection as="section">
        <h3>
          <QueryImage
            name="reviews"
            style={{
              display: 'inline-block',
              marginRight: '10px',
              verticalAlign: 'middle',
              width: 64
            }}
          />{' '}
          Sentiment Analysis
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
          expedita! Cum, velit perferendis rem repellendus doloremque
          exercitationem tempore voluptas quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus,
          recusandae debitis illo perspiciatis, iure atque itaque sapiente
          possimus consequuntur dolorem. Ipsam similique quis nesciunt voluptate
          aut nemo. Voluptatibus, magnam.
        </p>
        <Small>
          <Link to="https://github.com/thisRaptori/harmony" secondary button>
            <Icon name="GitHub" /> Code
          </Link>
        </Small>
      </WaveSection>
    </Projects>
  </Layout>
);

export default ProjectsPage;
