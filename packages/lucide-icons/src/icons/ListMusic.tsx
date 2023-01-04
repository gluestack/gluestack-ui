import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 15V6" />
      <Path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <Path d="M12 12H3" />
      <Path d="M16 6H3" />
      <Path d="M12 18H3" />
    </StyledSvg>
  );
};
Icon.displayName = 'ListMusic';
export const ListMusic = React.memo(Icon);
