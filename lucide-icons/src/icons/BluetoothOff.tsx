import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m17 17-5 5V12l-5 5" />
      <Path d="m2 2 20 20" />
      <Path d="M14.5 9.5 17 7l-5-5v4.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'BluetoothOff';
export const BluetoothOff = React.memo(Icon);
