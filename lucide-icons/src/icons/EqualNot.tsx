import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="5" y1="9" x2="19" y2="9" />
      <Line x1="5" y1="15" x2="19" y2="15" />
      <Line x1="19" y1="5" x2="5" y2="19" />
    </StyledSvg>
  );
};
Icon.displayName = 'EqualNot';
export const EqualNot = React.memo(Icon);
