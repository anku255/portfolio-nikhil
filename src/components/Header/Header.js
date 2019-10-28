import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Link, ThemeToggle } from 'src/components';
import { github, twitter, linkedin } from 'src/links';
import { HeaderElement, NavLink, Space } from './styles';
import SubNav from './SubNav';

const Header = ({ activePage, footerIsVisible, siteTitle }) => (
  <HeaderElement className="background transition primary-links">
    <nav>
      <Link to="/" className="site-title">
        <Icon name="Icon" fill={null} />
        {siteTitle}
      </Link>
      <Space />
      <SubNav footerIsVisible={footerIsVisible}>
        <NavLink active={activePage === 'projects'} to="/projects">
          <Icon name="Rocket" />
          <span>Projects</span>
        </NavLink>
        <NavLink external to="/nikhil-kumar-jha-resume.pdf">
          <Icon name="Resume" />
          <span>Resume</span>
        </NavLink>
        <NavLink to={github}>
          <Icon name="GitHub" />
          <span>GitHub</span>
        </NavLink>
        <NavLink to={twitter}>
          <Icon name="Twitter" />
          <span>Twitter</span>
        </NavLink>
        <NavLink to={linkedin}>
          <Icon name="LinkedIn" />
          <span>LinkedIn</span>
        </NavLink>
      </SubNav>
      <ThemeToggle />
    </nav>
  </HeaderElement>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
