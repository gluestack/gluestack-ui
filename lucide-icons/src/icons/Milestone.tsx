import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
      <Path d="M12 13v9" />
      <Path d="M12 2v4" />
    </StyledSvg>
  );
};
Icon.displayName = 'Milestone';
export const Milestone = React.memo(Icon);
