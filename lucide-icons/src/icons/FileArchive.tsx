import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2" />
      <Polyline points="14 2 14 8 20 8" />
      <_Circle cx="10" cy="20" r="2" />
      <Path d="M10 7V6" />
      <Path d="M10 12v-1" />
      <Path d="M10 18v-2" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileArchive';
export const FileArchive = React.memo(Icon);
