import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Rect x="7" y="7" width="3" height="9" />
      <Rect x="14" y="7" width="3" height="5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Trello';
export const Trello = React.memo(Icon);
