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
      <Path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
      <Path d="M19.9 14.25A7.44 7.44 0 0 0 20 13a8 8 0 0 0-8-8 7.44 7.44 0 0 0-1.25.1" />
      <Path d="m22 6-3-3" />
      <Path d="m6 19-2 2" />
      <Path d="m2 2 20 20" />
      <Path d="M4 4 2 6" />
    </Svg>
  );
};
Icon.displayName = 'AlarmClockOff';
export const AlarmClockOff = React.memo(Icon);
