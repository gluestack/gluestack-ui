import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </StyledSvg>
  );
};
Icon.displayName = 'Activity';
export const Activity = React.memo(Icon);
