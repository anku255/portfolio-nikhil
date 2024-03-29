import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import 'minireset.css';
import '../../styles.css';

import { Footer, Header, WaveSection } from 'src/components';
import { useIsVisible } from 'src/hooks';
import { Below, Main, Wrapper } from './styles';

const Layout = ({ activePage, belowTheWaves, children }) => {
  const [footerRef, footerIsVisible] = useIsVisible();

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header
            activePage={activePage}
            footerIsVisible={footerIsVisible}
            siteTitle={data.site.siteMetadata.title}
          />
          <Wrapper className="background transition">
            <Main>{children}</Main>
            <WaveSection footer>
              <div ref={footerRef} />
              {belowTheWaves ? <Below>{belowTheWaves}</Below> : null}
              <Footer />
            </WaveSection>
          </Wrapper>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
