import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M22 5V2l-5.89 5.89" />
      <_Circle cx="16.6" cy="15.89" r="3" />
      <_Circle cx="8.11" cy="7.4" r="3" />
      <_Circle cx="12.35" cy="11.65" r="3" />
      <_Circle cx="13.91" cy="5.85" r="3" />
      <_Circle cx="18.15" cy="10.09" r="3" />
      <_Circle cx="6.56" cy="13.2" r="3" />
      <_Circle cx="10.8" cy="17.44" r="3" />
      <_Circle cx="5" cy="19" r="3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Grape';
export const Grape = React.memo(Icon);
