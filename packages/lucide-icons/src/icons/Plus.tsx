import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="12" y1="5" x2="12" y2="19" />
      <Line x1="5" y1="12" x2="19" y2="12" />
    </StyledSvg>
  );
};
Icon.displayName = 'Plus';
export const Plus = React.memo(Icon);
