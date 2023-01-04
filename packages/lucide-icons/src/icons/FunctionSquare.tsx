import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
      <Path d="M9 11.2h5.7" />
    </StyledSvg>
  );
};
Icon.displayName = 'FunctionSquare';
export const FunctionSquare = React.memo(Icon);
