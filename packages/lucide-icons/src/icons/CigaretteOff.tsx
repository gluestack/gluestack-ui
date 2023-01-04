import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="2" y1="2" x2="22" y2="22" />
      <Path d="M12 12H2v4h14" />
      <Path d="M22 12v4" />
      <Path d="M18 12h-.5" />
      <Path d="M7 12v4" />
      <Path d="M18 8c0-2.5-2-2.5-2-5" />
      <Path d="M22 8c0-2.5-2-2.5-2-5" />
    </StyledSvg>
  );
};
Icon.displayName = 'CigaretteOff';
export const CigaretteOff = React.memo(Icon);
