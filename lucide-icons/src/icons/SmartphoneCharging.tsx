import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <Path d="M12.667 8 10 12h4l-2.667 4" />
    </StyledSvg>
  );
};
Icon.displayName = 'SmartphoneCharging';
export const SmartphoneCharging = React.memo(Icon);
