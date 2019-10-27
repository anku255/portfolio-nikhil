import React from 'react';
import styled from 'styled-components';

import { Icon } from 'src/components';
import { useRaptoriTheme } from 'src/hooks';

const Button = styled.button`
  flex-direction: column;
  justify-content: center;
  padding: 0 !important;
  position: relative;
  text-decoration: none;
  width: calc(3 * var(--header-padding));
  color: var(--secondary);

  span {
    font-size: 13px;
    line-height: 1;
    padding-top: calc(var(--header-padding) / 4);
  }
`;

const ThemeToggle = () => {
  const [isDark, toggleTheme] = useRaptoriTheme();

  return (
    <Button onClick={toggleTheme} aria-label="visual theme toggle">
      <Icon name={isDark ? 'Sun' : 'Moon'} />
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </Button>
  );
};

export default ThemeToggle;
