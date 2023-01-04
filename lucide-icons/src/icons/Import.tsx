import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 3v12" />
      <Path d="m8 11 4 4 4-4" />
      <Path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </StyledSvg>
  );
};
Icon.displayName = 'Import';
export const Import = React.memo(Icon);
