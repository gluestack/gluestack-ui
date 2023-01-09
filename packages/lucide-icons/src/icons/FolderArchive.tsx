import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6" />
      <_Circle cx="16" cy="19" r="2" />
      <Path d="M16 11v-1" />
      <Path d="M16 17v-2" />
    </StyledSvg>
  );
};
Icon.displayName = 'FolderArchive';
export const FolderArchive = React.memo(Icon);
