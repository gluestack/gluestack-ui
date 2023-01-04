import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="21" y1="6" x2="3" y2="6" />
      <Line x1="21" y1="12" x2="9" y2="12" />
      <Line x1="21" y1="18" x2="7" y2="18" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlignRight';
export const AlignRight = React.memo(Icon);
