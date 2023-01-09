import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
      <Path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
      <Path d="M12 20v2" />
      <Path d="M12 14v2" />
      <Path d="M12 8v2" />
      <Path d="M12 2v2" />
    </StyledSvg>
  );
};
Icon.displayName = 'FlipHorizontal';
export const FlipHorizontal = React.memo(Icon);
