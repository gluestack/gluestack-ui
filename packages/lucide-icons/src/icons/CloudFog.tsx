import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <Path d="M16 17H7" />
      <Path d="M17 21H9" />
    </StyledSvg>
  );
};
Icon.displayName = 'CloudFog';
export const CloudFog = React.memo(Icon);
