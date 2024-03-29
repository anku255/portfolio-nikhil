import React from 'react';
import styled from 'styled-components';

import { Link, MetaText, QueryImage } from 'src/components';

const StyledLink = styled(Link)`
  color: var(${props => (props.inFooter ? '--dark' : '--text')}) !important;
  display: flex;
  flex-direction: column;
  margin: 1rem -1rem -1rem;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  ${props =>
    !props.inFooter
      ? `
		box-shadow:
			0 0.5rem 1rem var(--shadow),
			0 0 1rem var(--shadow);
		border-radius: .5rem;
		&:hover {
			box-shadow:
				0 1rem 2rem var(--shadow),
				0 0 1rem var(--shadow);
			transform: translate(0, -.2rem) scale(1.02);
		}
	`
      : ''}
  .gatsby-image-wrapper {
    background: var(--text);
    flex: 0 0 160px;
    margin: -1rem -1rem 1rem -1rem;
  }
  @media (min-width: 600px) {
    ${props =>
      props.featured
        ? `
			grid-column-end: span 2;
			min-height: 230px;
			padding: 2rem 1.5rem 2rem calc(50% + 5rem);
			.gatsby-image-wrapper {
				bottom: 0;
				left: 0;
				margin: 0 -2rem 0 0;
				position: absolute !important;
				right: 50%;
				top: 0;
			}`
        : ''}
  }
  & + & {
    margin-top: calc(4rem + 1vw);
  }
  > * {
    margin: 0;
  }
  > ${MetaText} {
    margin-top: 1rem;
  }
  hr {
    border: none;
    margin-top: 2rem;
  }
  h4 {
    line-height: 1.3;
  }
  p {
    line-height: 1.5;
    margin-top: 2rem;
  }
`;

const ProjectLink = ({ title, subtitle, image, link, featured, inFooter }) => (
  <StyledLink
    className="background transition"
    featured={featured}
    inFooter={inFooter}
    to={link}
  >
    <QueryImage name={image} />
    <h4>{title}</h4>
    {subtitle ? <p>{subtitle}</p> : null}
  </StyledLink>
);

export default ProjectLink;
