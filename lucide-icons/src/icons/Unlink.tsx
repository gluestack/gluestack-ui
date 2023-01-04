import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
      <Path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
      <Line x1="8" y1="2" x2="8" y2="5" />
      <Line x1="2" y1="8" x2="5" y2="8" />
      <Line x1="16" y1="19" x2="16" y2="22" />
      <Line x1="19" y1="16" x2="22" y2="16" />
    </StyledSvg>
  );
};
Icon.displayName = 'Unlink';
export const Unlink = React.memo(Icon);
