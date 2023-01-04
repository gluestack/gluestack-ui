import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      <Line x1="12" x2="12" y1="7" y2="13" />
      <Line x1="15" x2="9" y1="10" y2="10" />
    </StyledSvg>
  );
};
Icon.displayName = 'BookmarkPlus';
export const BookmarkPlus = React.memo(Icon);
