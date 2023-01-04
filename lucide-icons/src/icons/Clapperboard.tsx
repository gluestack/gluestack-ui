import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z" />
      <Path d="m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z" />
      <Path d="m6.6 4.99 3.38 4.2" />
      <Path d="m11.86 3.38 3.38 4.2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Clapperboard';
export const Clapperboard = React.memo(Icon);
