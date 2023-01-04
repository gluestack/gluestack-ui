import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="5" width="6" height="14" rx="2" />
      <Rect x="16" y="7" width="6" height="10" rx="2" />
      <Path d="M12 2v20" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlignHorizontalJustifyCenter';
export const AlignHorizontalJustifyCenter = React.memo(Icon);
