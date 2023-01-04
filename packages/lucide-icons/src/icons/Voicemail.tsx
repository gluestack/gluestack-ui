import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="6" cy="12" r="4" />
      <_Circle cx="18" cy="12" r="4" />
      <Line x1="6" y1="16" x2="18" y2="16" />
    </StyledSvg>
  );
};
Icon.displayName = 'Voicemail';
export const Voicemail = React.memo(Icon);
