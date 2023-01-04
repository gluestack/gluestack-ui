import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="3" width="16" height="16" rx="2" />
      <Path d="M4 11h16" />
      <Path d="M12 3v8" />
      <Path d="m8 19-2 3" />
      <Path d="m18 22-2-3" />
      <Path d="M8 15h0" />
      <Path d="M16 15h0" />
    </StyledSvg>
  );
};
Icon.displayName = 'Train';
export const Train = React.memo(Icon);
