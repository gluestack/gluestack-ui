import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <Path d="M14 2v6h6" />
      <Path d="m3 12.5 5 5" />
      <Path d="m8 12.5-5 5" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileX2';
export const FileX2 = React.memo(Icon);
