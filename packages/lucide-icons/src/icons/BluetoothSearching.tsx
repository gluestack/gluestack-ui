import React from 'react';
import { Svg, Path } from 'react-native-svg';
const Icon = (props: any) => {
  const { color = 'black', size = 24 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <Path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
      <Path d="M18 12h.01" />
    </Svg>
  );
};
Icon.displayName = 'BluetoothSearching';
export const BluetoothSearching = React.memo(Icon);
