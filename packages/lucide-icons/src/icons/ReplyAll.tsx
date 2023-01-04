import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="7 17 2 12 7 7" />
      <Polyline points="12 17 7 12 12 7" />
      <Path d="M22 18v-2a4 4 0 0 0-4-4H7" />
    </StyledSvg>
  );
};
Icon.displayName = 'ReplyAll';
export const ReplyAll = React.memo(Icon);
