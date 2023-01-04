import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M9 13v-1h6v1" />
      <Path d="M11 18h2" />
      <Path d="M12 12v6" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileType';
export const FileType = React.memo(Icon);
