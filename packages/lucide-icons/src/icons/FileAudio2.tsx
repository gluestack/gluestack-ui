import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M2 17v-3a4 4 0 0 1 8 0v3" />
      <_Circle cx="9" cy="17" r="1" />
      <_Circle cx="3" cy="17" r="1" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileAudio2';
export const FileAudio2 = React.memo(Icon);
