import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M6 20h4" />
      <Path d="M14 10h4" />
      <Path d="M6 14h2v6" />
      <Path d="M14 4h2v6" />
      <Rect x="6" y="4" width="4" height="6" />
      <Rect x="14" y="14" width="4" height="6" />
    </StyledSvg>
  );
};
Icon.displayName = 'Binary';
export const Binary = React.memo(Icon);
