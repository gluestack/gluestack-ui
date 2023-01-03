import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
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
      <Line x1="18" y1="12" y2="12" x2="21" />
      <Line x1="3" y1="12" y2="12" x2="6" />
    </Svg>
  );
};
Icon.displayName = 'BluetoothConnected';
export const BluetoothConnected = React.memo(Icon);
