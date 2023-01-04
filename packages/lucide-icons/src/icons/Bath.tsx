import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <Line x1="10" y1="5" x2="8" y2="7" />
      <Line x1="2" y1="12" x2="22" y2="12" />
      <Line x1="7" y1="19" x2="7" y2="21" />
      <Line x1="17" y1="19" x2="17" y2="21" />
    </StyledSvg>
  );
};
Icon.displayName = 'Bath';
export const Bath = React.memo(Icon);
