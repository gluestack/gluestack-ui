import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
      <_Circle cx="6.5" cy="16.5" r="2.5" />
      <_Circle cx="16.5" cy="16.5" r="2.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Car';
export const Car = React.memo(Icon);
