import React from 'react';
import { Layout, Link, SEO, WaveSection } from 'src/components';

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
          <Link to="/blog" button>
            All Posts
          </Link>
          &nbsp;
          <Link to="/projects" secondary button>
            Projects
          </Link>
          &nbsp;
          <Link to="/resume" secondary button>
            Resume
          </Link>
        </p>
      </WaveSection>
    </Layout>
  );
};

export default IndexPage;
