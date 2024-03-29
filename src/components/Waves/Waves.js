import React from 'react';

import { useRaptoriTheme } from 'src/hooks';
import { Clip, Gradient, Wave, Waves as Wrapper } from './styles';

const Waves = ({ invert, offset }) => {
  const [isDark] = useRaptoriTheme();
  const fill = isDark ? '#6acbfa' : '#37bcfc';

  return (
    <Wrapper className="background transition" invert={invert}>
      <Gradient />
      <Clip className="background transition">
        <Wave
          offset={offset}
          fill={fill}
          speed={0.8}
          size={1.0}
          as={isDark && 'span'}
        />
        <Wave
          offset={offset}
          fill={fill}
          speed={1.1}
          size={1.1}
          as={isDark && 'span'}
        />
        <Wave
          offset={offset}
          fill={fill}
          speed={1.2}
          size={0.9}
          as={isDark && 'span'}
        />
        <Wave
          offset={offset}
          fill={fill}
          speed={1.3}
          size={0.7}
          as={isDark && 'span'}
        />
        <Wave
          offset={offset}
          fill={fill}
          speed={1.6}
          size={0.8}
          as={isDark && 'span'}
        />
      </Clip>
    </Wrapper>
  );
};

export default Waves;
