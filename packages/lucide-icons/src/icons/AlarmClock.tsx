import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <_Circle cx="12" cy="13" r="8" />
      <Path d="M12 9v4l2 2" />
      <Path d="M5 3 2 6" />
      <Path d="m22 6-3-3" />
      <Path d="m6 19-2 2" />
      <Path d="m18 19 2 2" />
    </Svg>
  );
};
Icon.displayName = 'AlarmClock';
export const AlarmClock = React.memo(Icon);
