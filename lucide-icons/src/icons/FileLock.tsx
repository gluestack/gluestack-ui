import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Rect x="8" y="12" width="8" height="6" rx="1" />
      <Path d="M15 12v-2a3 3 0 1 0-6 0v2" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileLock';
export const FileLock = React.memo(Icon);
