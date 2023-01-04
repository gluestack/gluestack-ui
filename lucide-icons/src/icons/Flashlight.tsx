import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" />
      <Line x1="6" y1="6" x2="18" y2="6" />
      <Line x1="12" y1="12" x2="12" y2="12" />
    </StyledSvg>
  );
};
Icon.displayName = 'Flashlight';
export const Flashlight = React.memo(Icon);
