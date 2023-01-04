import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
      <Line x1="16" y1="2" x2="16" y2="6" />
      <Line x1="8" y1="2" x2="8" y2="6" />
      <Line x1="3" y1="10" x2="21" y2="10" />
      <Line x1="19" y1="16" x2="19" y2="22" />
      <Line x1="16" y1="19" x2="22" y2="19" />
    </StyledSvg>
  );
};
Icon.displayName = 'CalendarPlus';
export const CalendarPlus = React.memo(Icon);
