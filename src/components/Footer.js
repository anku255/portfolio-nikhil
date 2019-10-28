import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  color: var(--dark);
`;

const Text = styled.p`
  margin: 2rem;
  text-align: center;

  a {
    color: inherit !important;
    text-decoration: none;
  }
`;

const year = new Date().getFullYear();

const Footer = () => (
  <Wrapper>
    <Text>• Copyright {year} Nikhil Kumar Jha • </Text>
  </Wrapper>
);

export default Footer;
