import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 15V9" />
      <Path d="M14 15V9" />
      <Path d="M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z" />
    </StyledSvg>
  );
};
Icon.displayName = 'PauseOctagon';
export const PauseOctagon = React.memo(Icon);
