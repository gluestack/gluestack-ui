import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="6" width="20" height="12" rx="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'RectangleHorizontal';
export const RectangleHorizontal = React.memo(Icon);
