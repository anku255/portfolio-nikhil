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
          Refract is a JavaScript library which makes makes reactive programming
          possible in apps using React, React Native, Preact, Inferno, or Redux.
        </p>
        <p>
          Reactive programming is a powerful programming paradigm which allows
          engineers to express complex asynchronous logic flows in a clear and
          declarative fashion. This can help reduce surface area for bugs,
          improve code reuse, simplify complex functionality, and make
          impossible functionality possible.
        </p>
        <p>
          Refract provides an API designed to expose the internals of a typical
          unidirectional data flow, and make it easy to separate logic from
          imperative side-effects. It takes care of the hard parts of connecting
          your reactive programming library to your app, so you can focus on
          writing your logic instead.
        </p>
        <Small>
          <Link
            to="/blog/how-we-harnessed-the-power-of-reactive-programming-with-refract"
            button
          >
            Find Out More
          </Link>
          &nbsp;
          <Link to="https://refract.js.org/" secondary button>
            Documentation
          </Link>
          &nbsp;
          <Link to="https://github.com/fanduel-oss/refract" secondary button>
            <Icon name="GitHub" /> Code
          </Link>
        </Small>
      </section>

      <WaveSection as="section">
        <h3>
          <QueryImage
            name="harmony"
            style={{
              display: 'inline-block',
              marginRight: '10px',
              verticalAlign: 'middle',
              width: 64
            }}
          />{' '}
          Harmony
        </h3>
        <p>
          Harmony is a Chrome extension which simplifies the Discord interface
          and adds some useful features.
        </p>
        <p>
          Discord is a chat application (primarily aimed at gamers) which is
          used by some major subsections of the programming community. I'm an
          active member of several of these servers—most notably{' '}
          <Link to="https://www.reactiflux.com">Reactiflux</Link>—and as a
          result use Discord daily.
        </p>
        <p>
          The Discord interface has some bugs and slight annoyances which
          regularly get in the way, and some useful features which would be easy
          to implement are currently missing. Harmony has been a great way to
          explore how Chrome extensions are structured while solving these
          everyday problems!
        </p>
        <Small>
          <Link
            to="https://chrome.google.com/webstore/detail/harmony/jaaoemgmljmlgmpailnhdikgbpffhkkd"
            secondary
            button
          >
            Web Store
          </Link>
          &nbsp;
          <Link to="https://github.com/thisRaptori/harmony" secondary button>
            <Icon name="GitHub" /> Code
          </Link>
        </Small>
      </WaveSection>
    </Projects>
  </Layout>
);

export default ProjectsPage;
