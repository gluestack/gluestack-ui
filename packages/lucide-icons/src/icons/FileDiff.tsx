import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Path d="M12 13V7" />
      <Path d="M9 10h6" />
      <Path d="M9 17h6" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileDiff';
export const FileDiff = React.memo(Icon);
