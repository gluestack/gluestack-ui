import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="21" y1="6" x2="3" y2="6" />
      <Line x1="17" y1="12" x2="7" y2="12" />
      <Line x1="19" y1="18" x2="5" y2="18" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlignCenter';
export const AlignCenter = React.memo(Icon);
